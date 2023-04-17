import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUserDto } from 'src/app/dtos/create-user.dto';
import { UserEntity } from 'src/app/entities/user.entity';
import { CreateUserUseCase } from 'src/app/use-cases/user/create-user.usecase';
import { GetAllUsersUseCase } from 'src/app/use-cases/user/get-all-users.usecase';

@Controller('users')
export class UserController {
  constructor(
    private createUserUseCase: CreateUserUseCase,
    private getAllUsers: GetAllUsersUseCase,
  ) {}

  @Get()
  getUsers(): string {
    return 'get users';
  }

  @Post()
  create(@Body() body: CreateUserDto) {
    this.createUserUseCase.execute(
      new UserEntity({
        name: body.name,
        email: body.email,
        phone: body.phone,
      }),
    );

    // TODO temp
    return this.getAllUsers.execute();
  }
}
