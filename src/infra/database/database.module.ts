import { Module } from '@nestjs/common';
import { UserInMemoryDatabaseRepository } from './in-memory-database/repositories/user-inmemory.repository';
import { UserRepository } from 'src/app/repositories/user.repository';

@Module({
  providers: [
    {
      provide: UserRepository,
      useClass: UserInMemoryDatabaseRepository,
    },
  ],
  exports: [
    UserRepository
  ],
})
export class DatabaseModule {}
