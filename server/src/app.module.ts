import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { mongooseConfig } from './database/mongoose.config';
import { UserModule } from './user/user.module';
import { BlogModule } from './blog/blog.module';
import { CommentModule } from './comment/comment.module';
import { CategoryModule } from './category/category.module';
import { AnyExceptionFilter } from './http-exception.filter';
import { APP_FILTER } from '@nestjs/core';
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    mongooseConfig(),
    AuthModule,
    UserModule,
    BlogModule,
    CommentModule,
    CategoryModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    AuthModule,
    UserModule,
    {
      provide: APP_FILTER,
      useClass: AnyExceptionFilter,
    },
  ],
})
export class AppModule {}
