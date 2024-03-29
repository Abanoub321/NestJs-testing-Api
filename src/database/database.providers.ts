import { Sequelize } from 'sequelize-typescript';
import * as pg from 'pg';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'postgres',
        host: 'localhost',
        port: 5432,
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: 'Test_DB',
        dialectModule: pg,
        sync: { alter: true }
      });
      sequelize.addModels([__dirname + '/Entity']);
      await sequelize.sync();
      return sequelize;
    },
  },
];