import { Body, Controller, Post, Request, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { ApiBody , ApiTags} from '@nestjs/swagger';
import { CreateUserDto } from 'src/user/dto/createUser.dto';
import { UserService } from 'src/user/user.service';
@ApiTags('auth')
@Controller('auth')
export class AuthController {

    constructor(private authService: AuthService, private userService: UserService) {}

    @Post('register')
    @UsePipes(ValidationPipe)
    async register(@Body() createUserDto: CreateUserDto) {
        return await this.userService.createUser(createUserDto);
    }
    
    @UseGuards(LocalAuthGuard)
    @Post('login')
    @ApiBody({ type: CreateUserDto })
    async login(@Request() req) {
        return this.authService.login(req.user);
    }
}
