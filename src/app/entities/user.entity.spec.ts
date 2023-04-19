import { randomUUID } from 'crypto';
import { UserInMemoryDatabaseRepository } from '../../../test/repositories/user-inmemory.repository';
import { makeNewUser } from '../../../test/factories/user-factory';

describe('User entity', () => {
  const userRepository = new UserInMemoryDatabaseRepository();

  it('should be abble to instantiate a new user entity', () => {
    expect(makeNewUser()).toBeTruthy();
  });

  it('should fail if name is less than 5 characters', () => {
    expect(() => {
      makeNewUser({ name: 'Abc' });
    }).toThrow();
  });

  it('should be able to create a new user', async () => {
    await userRepository.create(makeNewUser({ name: 'Rodolfo Santos' }));
    const users = await userRepository.getUsers();
    expect(users[0].name).toBe('Rodolfo Santos');
  });

  it('should be able to find a user by id', async () => {
    const userData = makeNewUser();
    await userRepository.create(userData);
    const findedUser = await userRepository.findById(userData.id);
    expect(findedUser.id).toBe(userData.id);
  });

  it('should be able to find a user by email', async () => {
    const userData = makeNewUser();
    await userRepository.create(userData);
    const findedUser = await userRepository.findById(userData.id);
    expect(findedUser.email).toBe(userData.email);
  });
});
