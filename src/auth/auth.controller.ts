import { Controller, Post, Request, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './local-auth.guard';
import { ApiBody , ApiTags} from '@nestjs/swagger';
import { CreateUserDto } from 'src/user/dto/createUser.dto';
@ApiTags('auth')
@Controller('auth')
export class AuthController {

    constructor(private authService: AuthService) {}
    
    @UseGuards(LocalAuthGuard)
    @Post('login')
    @ApiBody({ type: CreateUserDto })
    async login(@Request() req) {
        return this.authService.login(req.user);
    }
}
