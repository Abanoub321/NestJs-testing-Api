export class CreateUserDto {
    name: string;
    phone: string;
    password: string;
    role: string = 'user';
}