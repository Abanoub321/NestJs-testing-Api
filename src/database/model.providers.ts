import Movie from "./Entity/Movie.entity";
import User from "./Entity/User.entity";


export const EntityProviders = [
  {
    provide: 'USERS_REPOSITORY',
    useValue: User,
  },
  {
    provide : 'MOVIE_REPOSITORY',
    useValue: Movie
  }
];
