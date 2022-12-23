import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

import { Product } from './typeorm/entities/Product'
import { ProductsModule } from './products/products.module'

const TypeORMModule = TypeOrmModule.forRoot({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'admin',
  password: 'admin',
  database: 'store',
  entities: [Product],
  synchronize: true,
})

@Module({
  imports: [ProductsModule, TypeORMModule],
})
export class AppModule {}
