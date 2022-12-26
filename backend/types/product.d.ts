import { CreateProductDTO } from 'src/products/product.dto'
import { Product } from 'src/typeorm/entities/Product'

export type CreateProductParams = Pick<CreateProductDTO>
