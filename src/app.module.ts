import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './User/user.module';
import { config as dotenv } from "dotenv"
dotenv({ path: '.env' });

@Module({
  imports: [
    UserModule,
    TypeOrmModule.forRootAsync({
    useFactory: () => {
      return {
        type: "postgres",
        host: 'localhost',
        port: 5432,
        username: 'postgres',
        password: `${process.env.DBPASSWORD}`,
        database: 'my-app',
        entities: ["src/entity/*.ts"],
        synchronize: true,
        keepConnectionAlive: true,
      };
    },
  })],
  controllers: [AppController],
  providers: [AppService],
  
})

export class AppModule {}
