import { Module } from '@nestjs/common';
import { UserInMemoryDatabaseRepository } from '../../../test/repositories/user-inmemory.repository';
import { UserRepository } from 'src/app/repositories/user.repository';

@Module({
  providers: [
    {
      provide: UserRepository,
      useClass: UserInMemoryDatabaseRepository, // TODO Temporary in memory database
    },
  ],
  exports: [
    UserRepository
  ],
})
export class DatabaseModule {}
