import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'

import { Product } from 'src/typeorm/entities/Product'
import { CreateProductParams } from 'types/product'

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product) private productsRepository: Repository<Product>,
  ) {}

  create(productParams: CreateProductParams) {
    const product = this.productsRepository.create(productParams)

    return this.productsRepository.save(product)
  }

  getAll(): Promise<Product[]> {
    return this.productsRepository.find()
  }
}
