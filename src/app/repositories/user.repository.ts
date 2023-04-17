import { UserEntity } from '../entities/user.entity';

export abstract class UserRepository {
  abstract findByEmail(email: string): Promise<UserEntity>;
  abstract findById(id: string): Promise<UserEntity>;
  abstract create(user: UserEntity): Promise<void>;
  abstract getUsers(): Promise<UserEntity[]>;
}
