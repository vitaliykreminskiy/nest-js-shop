import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Req,
  Res,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common'
import { Request, Response } from 'express'
import { Product } from 'types/product'
import { CreateProductDTO } from './product.dto'

const products: Product[] = []

@Controller('products')
export class ProductsController {
  @Get('all')
  all() {
    return products
  }

  @Post('new')
  @UsePipes(new ValidationPipe())
  new(@Body() product: CreateProductDTO, @Res() res: Response) {
    products.push(product)

    return res.send('Created')
  }

  @Get(':SKU')
  findBySKU(@Param('SKU') SKU: string, @Res() res: Response) {
    return res.send('')
  }
}
