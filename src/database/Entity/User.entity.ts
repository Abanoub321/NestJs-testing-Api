import { Exclude } from 'class-transformer';
import { Table, Column, Model, Default } from 'sequelize-typescript';
import UserRole from 'src/Enums/userRole';

@Table({ tableName: 'users' })
export default class User extends Model {
    @Column({})
    name: string;

    @Column({})
    @Exclude({ toClassOnly: true })
    password: string;
    
    @Column({
        unique: true,
    })
    phone: string;


    @Default(UserRole.User)
    @Column({})
    userType: UserRole;
}