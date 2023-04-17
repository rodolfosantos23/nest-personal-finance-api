import { Injectable } from '@nestjs/common';
import { UserEntity } from '../../entities/user.entity';
import { UserRepository } from '../../repositories/user.repository';

@Injectable()
export class CreateUserUseCase {
  constructor(private userReposistory: UserRepository) {}

  execute(newUser: UserEntity) {
    return this.userReposistory.create(newUser);
  }
}
