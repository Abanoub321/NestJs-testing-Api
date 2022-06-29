import { Module } from '@nestjs/common';
import { EntityProviders } from 'src/database/model.providers';
import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({
    controllers: [UserController],
    providers: [UserService, ...EntityProviders],
})
export class UserModule { }
