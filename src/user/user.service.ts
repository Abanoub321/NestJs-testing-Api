import { HttpStatus, Inject, Injectable } from '@nestjs/common';
const bcrypt = require('bcrypt');
import User from 'src/database/Entity/User.entity';
import ResponseInterface from 'src/Interfaces/ResponseInterface';
import { CreateUserDto } from './dto/createUser.dto';


@Injectable()
export class UserService {

    constructor(
        @Inject('USERS_REPOSITORY')
        private usersRepository: typeof User,
    ) { }
    async createUser(user: CreateUserDto): Promise<ResponseInterface> {
        const isPhoneExist = await this.usersRepository.findOne({
            where: { phone: user.phone },
        });
        if (isPhoneExist) {
            return {
                code: HttpStatus.BAD_REQUEST,
                status: false,
                message: 'Phone already exist',
            };
        }
        const hashedPassword = await bcrypt.hash(user.password, 10);
        user.password = hashedPassword;
        const savedUser = await this.usersRepository.create({ ...user });
        savedUser.save();
        return {
            code: HttpStatus.CREATED,
            status: true,
            message: 'User created successfully',
        };
    }

    async findUser(phoneNumber): Promise<User> {
        return await this.usersRepository.findOne({
            where: { phone: phoneNumber }
        });
    }
}
