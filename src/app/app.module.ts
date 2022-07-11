import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';

//
import { AuthModule } from '../module/auth/auth.module';
import { PostModule } from '../module/post/post.module';
import { UserModule } from '../module/user/user.module';
import { CategoryModule } from '../module/category/category.module';
import { KeywordModule } from '../module/keyword/keyword.module';
import { KeywordTagModule } from '../module/keyword_tag/keyword_tag.module';
import { TagModule } from '../module/tag/tag.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    AuthModule,
    PostModule,
    UserModule,
    CategoryModule,
    KeywordModule,
    KeywordTagModule,
    TagModule,
    MongooseModule.forRoot(process.env.DATABASE_URI),
  ],
  // controllers: [AppController],
  // providers: [AppService],
})
export class AppModule {}
