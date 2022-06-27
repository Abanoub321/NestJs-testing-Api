import { Body, Controller, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreateUserDto } from './dto/createUser.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) { }
    @Post('register')
    @UsePipes(ValidationPipe)
    register(@Body() createUserDto: CreateUserDto) {
        return this.userService.createUser(createUserDto);
    }
}
