import { Body, Controller, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { NewMovieDto } from './dto/newMovie.dto';
import { MovieService } from './movie.service';

@Controller('movie')
export class MovieController {
    constructor(private readonly movieService: MovieService) { }

    @Post('create')
    @UsePipes(ValidationPipe)
    async createMovie(@Body() newMovieDto: NewMovieDto) {
        return await this.movieService.AddNewMovie(newMovieDto);
    }

}
