import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

// 클라이언트 요청 처리(Controller): 요청(Request) → 서비스(Service) 호출 → 응답(Response)
@Controller() // 이 클래스가 HTTP 요청을 처리한다는 것을 명시
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
