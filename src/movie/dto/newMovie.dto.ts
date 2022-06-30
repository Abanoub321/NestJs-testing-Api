import { IsNotEmpty, IsString } from "class-validator";

export class NewMovieDto {
    @IsNotEmpty()
    name: string;

    @IsNotEmpty()
    @IsString()
    image: string;

    @IsNotEmpty()
    releaseYear: number;
}