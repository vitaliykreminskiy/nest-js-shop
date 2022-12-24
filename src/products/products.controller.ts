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
import { CreateProductDTO } from './product.dto'
import { ProductsService } from './products.service'

@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  @Get('all')
  all() {
    this.productsService.getAll()
  }

  @Post('new')
  @UsePipes(new ValidationPipe())
  new(@Body() product: CreateProductDTO, @Res() res: Response) {
    this.productsService.create(product)
  }

  @Get(':SKU')
  findBySKU(@Param('SKU') SKU: string, @Res() res: Response) {
    return res.send('')
  }
}
