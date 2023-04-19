import { Injectable } from '@nestjs/common';
import { UserEntity } from 'src/app/entities/user.entity';
import { UserRepository } from 'src/app/repositories/user.repository';

@Injectable()
export class UserInMemoryDatabaseRepository implements UserRepository {
  private users: UserEntity[] = [];

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
