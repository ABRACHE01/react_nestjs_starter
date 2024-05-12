import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import configuration from 'config/configuration'; 
import { DatabaseConfig } from 'config/database.config';



@Module({
  imports: [ 
    ConfigModule.forRoot({
    isGlobal: true,
    envFilePath: '.env',
    load: [configuration],
  }),

  TypeOrmModule.forRootAsync({
    imports: [ConfigModule],
    useClass: DatabaseConfig,
  }),],
})
export class AppModule {}
