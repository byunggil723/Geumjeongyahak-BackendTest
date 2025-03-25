import { Injectable } from '@nestjs/common';

// 핵심 로직 처리(Service): 데이터 처리, DB 연결, 외부 API 호출, 계산 등등...
@Injectable() // 서비스임을 명시 (다른 곳에서 주입받을 수 있음)
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
