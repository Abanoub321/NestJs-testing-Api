import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { DatabaseModule } from './database/database.module';
import { MovieModule } from './movie/movie.module';

@Module({
  imports: [UserModule, DatabaseModule, MovieModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
