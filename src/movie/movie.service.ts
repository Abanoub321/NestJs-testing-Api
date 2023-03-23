import { HttpStatus, Inject, Injectable } from '@nestjs/common';
import Movie from 'src/database/Entity/Movie.entity';
import ResponseInterface from 'src/Interfaces/ResponseInterface';
import { NewMovieDto } from './dto/newMovie.dto';

@Injectable()
export class MovieService {

    constructor(
        @Inject('MOVIE_REPOSITORY')
        private movieRepository: typeof Movie,
    ) { }
    async AddNewMovie(newMovie: NewMovieDto): Promise<ResponseInterface> {
        const movie = await this.movieRepository.create({ ...newMovie });
        await movie.save();
        return {
            status: true,
            code: HttpStatus.CREATED,
            data: movie
        };
    }
}
