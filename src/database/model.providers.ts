import User from "./Entity/User.entity";


export const EntityProviders = [
  {
    provide: 'USERS_REPOSITORY',
    useValue: User,
  }
];
