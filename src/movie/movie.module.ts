import { Module } from '@nestjs/common';
import { EntityProviders } from 'src/database/model.providers';
import { MovieController } from './movie.controller';
import { MovieService } from './movie.service';

@Module({
  controllers: [MovieController],
  providers: [MovieService, ...EntityProviders]
})
export class MovieModule {}
