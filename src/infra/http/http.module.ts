import { Module } from '@nestjs/common';
import { UserController } from './controllers/user.controller';
import { CreateUserUseCase } from 'src/app/use-cases/user/create-user-use-case';
import { GetAllUsersUseCase } from 'src/app/use-cases/user/get-all-users-use-case';
import { DatabaseModule } from '../database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [UserController],
  providers: [
    CreateUserUseCase,
    GetAllUsersUseCase
  ],
})
export class HttpModule {}
