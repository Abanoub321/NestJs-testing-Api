import { Body, Controller, Get, Post, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { ApiBearerAuth, ApiResponse, ApiTags } from '@nestjs/swagger';
import Forbidden from 'src/Interfaces/HTTP_responses/Forrbidden';
import { CurrentUser } from 'src/shared/decorators/currentUser.decorator';
import { CreateUserDto } from './dto/createUser.dto';
import { UserService } from './user.service';
import User from '../database/Entity/User.entity';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';

@ApiResponse({ status: 403, type: Forbidden, })

@ApiTags('user')
@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) { }
    @Get('/')
    @ApiBearerAuth()
    @UseGuards(JwtAuthGuard) 
    async getUser(@CurrentUser() user: User) {
        return await this.userService.findUsers();
    }
}
