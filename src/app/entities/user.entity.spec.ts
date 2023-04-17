import { UserEntity } from './user.entity';

describe('User entity', () => {
  it('should be abble to create an user', () => {
    const newUser = new UserEntity({
      name: 'Rodolfo Santos',
      email: 'email@gmail.com.br',
      phone: '11988686868',
    });
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
});
