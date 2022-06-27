import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/createUser.dto';
import { User } from './interfaces/user.interface';

@Injectable()
export class UserService {
    users: User[] = [];
   
    createUser(user: CreateUserDto) {
        this.users.push(user);
        return user;
    }
}
