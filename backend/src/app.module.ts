import { Module } from '@nestjs/common';
import { PetModule } from './pet/pet.module';
import { PrismaService } from './prisma/prisma.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { PrismaModule } from './prisma/prisma.module';
import { ThrottlerGuard, ThrottlerModule } from '@nestjs/throttler';
import { APP_GUARD } from '@nestjs/core';

@Module({
  imports: [PetModule, AuthModule, UsersModule, PrismaModule, ThrottlerModule.forRoot([
      {
        ttl: 60000,
        limit: 60,
        blockDuration: 5000,
      },
    ]),
  ],
  controllers: [],
  providers: [PrismaService, {
    provide: APP_GUARD,
    useClass: ThrottlerGuard,
  }],
})
export class AppModule {}