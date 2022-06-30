import { Exclude } from 'class-transformer';
import { Table, Column, Model, Default } from 'sequelize-typescript';
import UserRole from 'src/Enums/userRole';

@Table({ tableName: 'users' })
export default class Movie extends Model {
    @Column({})
    name: string;

    @Column({})
    image: string;
    
    @Column({field: 'release_year'})
    releaseYear: string;
}