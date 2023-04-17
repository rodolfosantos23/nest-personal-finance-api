import { Injectable } from '@nestjs/common';
import { UserEntity } from 'src/app/entities/user.entity';
import { UserRepository } from 'src/app/repositories/user.repository';

@Injectable()
export class UserInMemoryDatabaseRepository implements UserRepository {
  private users: UserEntity[] = [
    new UserEntity({
      id: '78a2185f-16b0-435a-a87d-021c0bd6d650',
      name: 'Rodolfo Santos',
      email: 'rodolfosantos23@gmail.com',
      phone: '11983737204',
    }),
  ];

  async findByEmail(email: string): Promise<UserEntity> {
    return this.users.find((user) => user.email == email);
  }

  async findById(id: string): Promise<UserEntity> {
    return this.users.find((user) => user.id == id);
  }

  async create(user: UserEntity): Promise<void> {
    this.users.push(user);
  }

  async getUsers(): Promise<UserEntity[]> {
    return this.users;
  }
}
