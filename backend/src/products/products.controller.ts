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
import { Request, Response, response } from 'express'
import { CreateProductDTO } from './product.dto'
import { ProductsService } from './products.service'
import { Unique } from 'typeorm'

@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  @Get('all')
  all(@Res() response: Response) {
    return this.productsService
      .getAll()
      .then((products) => response.json(products))
  }

  @Post('new')
  @UsePipes(new ValidationPipe())
  new(@Body() product: CreateProductDTO) {
    return this.productsService
      .create(product)
      .then((_) => response.send('Created'))
  }

  @Get(':SKU')
  findBySKU(@Param('SKU') SKU: string, @Res() res: Response) {
    return this.productsService.findBySKU(SKU).then((result) => {
      if (!result) {
        return res.status(404).send('Not found')
      }

      return res.send(result)
    })
  }
}
