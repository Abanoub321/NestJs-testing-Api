import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/createUser.dto';
import { LoginUserDto } from './dto/loginUser.dto';
import { User } from './interfaces/user.interface';

@Injectable()
export class UserService {
    users: User[] = [];
    
    createUser(user: CreateUserDto) {
        this.users.push(user);
        return user;
    }

    loginUser(loginUserDto: LoginUserDto) {
        return this.users.find(user => user.phone === loginUserDto.phone && user.password === loginUserDto.password);
    }
}
