import { Module } from '@nestjs/common'

import { TypeOrmModule } from '@nestjs/typeorm'
import { Product } from './products/product.entity'
import { ProductsModule } from './products/products.module'

const TypeORMModule = TypeOrmModule.forRoot({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'admin',
  password: 'admin',
  database: 'store',
  entities: [Product],
})

@Module({
  imports: [TypeORMModule, ProductsModule],
})
export class AppModule {}
