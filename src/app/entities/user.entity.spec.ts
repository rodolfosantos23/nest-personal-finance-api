import { randomUUID } from 'crypto';
import { UserInMemoryDatabaseRepository } from '../../../test/repositories/user-inmemory.repository';
import { UserEntity } from './user.entity';

function getUserData() {
  const randomId = randomUUID();

  return {
    id: randomId,
    name: 'Rodolfo Santos',
    email: 'email@gmail.com.br',
    phone: '11988686868',
  };
}

describe('User entity', () => {
  const userRepository = new UserInMemoryDatabaseRepository();

  it('should be abble to instantiate a new user entity', () => {
    const newUser = new UserEntity(getUserData());
    expect(newUser).toBeTruthy();
  });

  it('should fail if name is less than 5 characters', () => {
    expect(() => {
      new UserEntity({
        name: '123',
        email: 'email@gmail.com.br',
        phone: '11988686868',
      });
    }).toThrow();
  });

  it('should be able to create a new user', async () => {
    const userData = getUserData();
    await userRepository.create(new UserEntity(userData));

    const users = await userRepository.getUsers();
    expect(users[0].name).toBe('Rodolfo Santos');
  });

  it('should be able to find a user by id', async () => {
    const userData = getUserData();
    await userRepository.create(new UserEntity(userData));
    const findedUser = await userRepository.findById(userData.id);
    expect(findedUser.id).toBe(userData.id);
  });

  it('should be able to find a user by email', async () => {
    const userData = getUserData();
    await userRepository.create(new UserEntity(userData));
    const findedUser = await userRepository.findByEmail(userData.email);
    expect(findedUser.email).toBe(userData.email);
  });
});
