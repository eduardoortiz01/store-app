import { Component } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/shared/models/Product';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent {
  product!: Product;
  constructor(activateRoute: ActivatedRoute, productService: ProductService, private cartService : CartService, private router: Router){
    activateRoute.params.subscribe(
      (params)=> {
        if(params.id){
          this.product = productService.getProductById(params.id)
        }
      }
    )
  }
  addToCart(){
    this.cartService.addToCart(this.product);
    this.router.navigateByUrl('/cart-page');
  }

}
