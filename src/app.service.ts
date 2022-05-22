import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getAppStatus(): string {
    return 'Fala jovem! Por aqui está tudo funcionando nos trinks, mas não comemora ainda! Se liga lá http://localhost:3331/api';
  }
}
