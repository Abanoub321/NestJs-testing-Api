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
    register(@Body() createUserDto: CreateUserDto) {
        return this.userService.createUser(createUserDto);
    }

    @UseInterceptors(ClassSerializerInterceptor)
    @Post('login')
    login(@Body() loginUserDto: LoginUserDto) {
        const user = this.userService.loginUser(loginUserDto);
        if (user) return new SerializedUser(user);
        else
            throw new HttpException('User Does not Exist', HttpStatus.NOT_FOUND);
    }
}
