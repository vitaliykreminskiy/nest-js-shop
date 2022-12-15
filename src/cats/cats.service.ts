import { Injectable } from '@nestjs/common';
import { Cat } from 'src/interfaces/cat.interface';

@Injectable()
export class CatsService {
  private readonly cats: Cat[] = [];

  add(cat: Cat) {
    this.cats.push(cat);
  }

  remove(catName: string) {
    this.cats.filter((cat) => cat.name !== catName);
  }

  all(): string {
    if (!this.cats.length) {
      return 'No cats here';
    }

    return this.cats.map((cat) => cat.name).join(', ');
  }
}
