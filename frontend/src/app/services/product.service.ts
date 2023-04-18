import { Injectable } from '@angular/core';
import { Product } from '../shared/models/Product';
import { sample_product, sample_tags } from 'src/data';
import { Tag } from '../shared/models/Tag';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  getAll():Product[] {
    return sample_product;
  }
  getAllProductsBySearchTerm(searchTerm: string)
  {
    return this.getAll().filter(product => product.name.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase()))
  }
  getAllTags():Tag[]{
    return sample_tags;
  }
  getAllProductsByTag(tag:string):Product[]{
    return tag === "All"?
    this.getAll():
    this.getAll().filter(product => product.tags?.includes(tag));
  }
  getProductById(productId: string):Product{
    return this.getAll().find(product =>product.id == productId) ?? new Product();
  }
}
