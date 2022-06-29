import { Body, ClassSerializerInterceptor, Controller, HttpException, HttpStatus, Post, UseInterceptors, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreateUserDto } from './dto/createUser.dto';
import { LoginUserDto } from './dto/loginUser.dto';
import SerializedUser from './interfaces/serlializedUser';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) { }
    @Post('register')
    @UsePipes(ValidationPipe)
    async register(@Body() createUserDto: CreateUserDto) {
        return await this.userService.createUser(createUserDto);
    }

    @UseInterceptors(ClassSerializerInterceptor)
    @Post('login')
    async login(@Body() loginUserDto: LoginUserDto) {
        return await this.userService.loginUser(loginUserDto);
    }
}
