import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    UsersModule,
    MongooseModule.forRoot(
      'mongodb+srv://killua:ydSinQj1bBPzM9e7@cluster0.3wgaebe.mongodb.net/test',
    ),
  ],
})
export class AppModule {}
