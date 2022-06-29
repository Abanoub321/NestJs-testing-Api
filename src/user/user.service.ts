import { HttpStatus, Inject, Injectable } from '@nestjs/common';
import User from 'src/database/Entity/User.entity';
import ResponseInterface from 'src/Interfaces/ResponseInterface';
import { CreateUserDto } from './dto/createUser.dto';
import { LoginUserDto } from './dto/loginUser.dto';


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
        const savedUser = await this.usersRepository.create({ ...user });
        savedUser.save();
        return {
            code: HttpStatus.CREATED,
            status: true,
            message: 'User created successfully',
        };
    }

    async loginUser(loginUserDto: LoginUserDto): Promise<ResponseInterface> {
        const user = await this.usersRepository.findOne({
            where: { phone: loginUserDto.phone }, attributes: {
                exclude: ['password']
            }
        });
        if (user) return {
            code: HttpStatus.OK,
            status: true,
            data: user.toJSON()
        };
        else
            return {
                code: HttpStatus.NOT_FOUND,
                status: false,
                message: 'User not found',
            };
    }
}
