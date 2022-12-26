import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity({ name: 'products' })
export class Product {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ unique: true })
  SKU: string

  @Column()
  name: string

  @Column()
  price: number

  @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: string
}
