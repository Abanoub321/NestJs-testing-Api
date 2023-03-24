import { Body, Controller, Get, Patch, Post, UploadedFile, UseGuards, UseInterceptors, UsePipes, ValidationPipe } from '@nestjs/common';
import { ApiBearerAuth, ApiBody, ApiConsumes, ApiResponse, ApiTags } from '@nestjs/swagger';
import Forbidden from 'src/Interfaces/HTTP_responses/Forrbidden';
import { CurrentUser } from 'src/shared/decorators/currentUser.decorator';
import { CreateUserDto } from './dto/createUser.dto';
import { UserService } from './user.service';
import User from '../database/Entity/User.entity';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { FileInterceptor } from '@nestjs/platform-express';

@ApiResponse({ status: 403, type: Forbidden, })

@ApiTags('user')
@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) { }

    @Get('/profile')
    @ApiBearerAuth()
    @UseGuards(JwtAuthGuard) 
    async getProfile(@CurrentUser() user: {userId: number, role: string}) {
        return await this.userService.findUserById(user.userId);
    }

    @Get('/')
    async getUser(@CurrentUser() user: User) {
        return await this.userService.findUsers();
    }

    @Patch('/profilePicture')
    @ApiBearerAuth()
    @ApiConsumes('multipart/form-data')
    @ApiBody({
        schema: {
          type: 'object',
          properties: {
            profilePicture: {
              type: 'string',
              format: 'binary',
            },
          },
        },
      })
    @UseGuards(JwtAuthGuard)
    @UseInterceptors(FileInterceptor('profilePicture',{
        dest: './public/uploads',
    }))
    async updateProfilePicture(@CurrentUser()user:{userId: number, role: string}, @UploadedFile() file: Express.Multer.File) {
        return await this.userService.updateProfilePicture(user.userId, file);
    }
}
