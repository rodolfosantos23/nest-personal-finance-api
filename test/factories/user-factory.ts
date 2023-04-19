import { randomUUID } from 'crypto';
import { UserEntity, UserProps } from '../../src/app/entities/user.entity';

type Override = Partial<UserProps>;

export function makeNewUser(override: Override = {}) {
  const randomId = randomUUID();

  return new UserEntity({
    id: randomId,
    name: 'Rodolfo Santos',
    email: 'rodolfosantos23@gmail.com.br',
    phone: '11983737204',
    ...override,
  });
}
