import { Injectable } from '@nestjs/common';
import { UserRepository } from 'src/app/repositories/user.repository';

@Injectable()
export class GetAllUsersUseCase {
  constructor(private userRepository: UserRepository) {}

  public execute() {
    return this.userRepository.getUsers();
  }
}
