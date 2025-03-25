import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

// 서버 실행 코드
async function bootstrap() {
  const app = await NestFactory.create(AppModule); // AppModule 기반으로 서버 생성
  await app.listen(process.env.PORT ?? 3000); // localhost:3000 포트로 서버 실행
}
bootstrap();
