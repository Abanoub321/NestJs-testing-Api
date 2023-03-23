import { Body, Controller, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import Forbidden from 'src/Interfaces/HTTP_responses/Forrbidden';
import { CreateUserDto } from './dto/createUser.dto';
import { UserService } from './user.service';

@ApiResponse({ status: 403, type: Forbidden, })

@ApiTags('user')
@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) { }
    @Post('register')
    @UsePipes(ValidationPipe)
    async register(@Body() createUserDto: CreateUserDto) {
        return await this.userService.createUser(createUserDto);
    }
}
