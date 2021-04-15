import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'danggeundb.ccnujuyzzot8.ap-northeast-2.rds.amazonaws.com',
      port: 3306,
      username: 'admin',
      password: 'hyunbin7231',
      database: 'nestTest',
      // 생성한 Entity 넣어줌
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }), UserModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {
  constructor(private readonly connection: Connection) {}
}
