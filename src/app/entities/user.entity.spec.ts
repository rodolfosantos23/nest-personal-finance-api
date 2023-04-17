import { UserEntity } from "./user.entity";


describe('User entity', () => {
  it('should be abble to create an user', () => {
    const userEntity = new UserEntity({
      name: 'Name Last Name',
      email: 'email@gmail.com.br',
      phone: '11988686868',
    });

    expect(userEntity).toBeTruthy();
  });
});
