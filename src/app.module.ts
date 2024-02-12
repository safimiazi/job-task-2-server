/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user/user.entity';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';
import { VolunteerModule } from './volunteer/volunteer.module';
import { Volunteer } from './volunteer/volunteer.entity';
import { DropmenuModule } from './dropmenu/dropmenu.module';
import { Dropmenu } from './dropmenu/dropmenu.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT, 10),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: [User, Volunteer, Dropmenu],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([User]),
    VolunteerModule,
    DropmenuModule,
  ],
  controllers: [UserController],
  providers: [UserService,],
})
export class AppModule { }
