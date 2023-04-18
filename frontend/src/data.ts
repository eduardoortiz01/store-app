import {Product} from './app/shared/models/Product'
import { Tag } from './app/shared/models/Tag'
export const sample_product: Product[] = [
  {
    id: 'prod1',
    name: 'laptop gaming 15 test1',
    price :100,
    tags : ['gaming','laptop'],
    trademark: 'asus',
    stock : 18,
    details: 'lorem',
    imageurl: 'assets/laptop.jpg'
  },
  {
    id: 'prod2',
    name: 'tarjeta grafica test 2',
    price :1000,
    tags : ['gaming','grafica'],
    trademark: 'msi',
    stock : 18,
    details: '',
    imageurl: 'assets/tarjeta.jpg'
  }
]


export const sample_tags: Tag[] = [
  { name: 'gaming', count: 10},
  { name: 'grafica', count: 2},
  { name: 'laptop', count: 2}
]
