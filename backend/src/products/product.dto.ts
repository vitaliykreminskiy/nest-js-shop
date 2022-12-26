import { IsNotEmpty } from 'class-validator'

export class CreateProductDTO {
  @IsNotEmpty()
  SKU: string
  name: string
  price: number
}
