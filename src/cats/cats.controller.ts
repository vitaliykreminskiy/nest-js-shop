import {
  Controller,
  Delete,
  Get,
  HttpCode,
  Post,
  Req,
  Res,
} from '@nestjs/common';
import { Request } from 'express';
import { Cat } from 'src/interfaces/cat.interface';
import { CatsService } from './cats.service';

@Controller('cats')
export class CatsController {
  constructor(private catsService: CatsService) {}

  @Get()
  getAll(): string {
    return this.catsService.all();
  }

  @Post()
  newCat(@Req() req: Request<{}, {}, Cat>) {
    return this.catsService.add(req.body);
  }
}
