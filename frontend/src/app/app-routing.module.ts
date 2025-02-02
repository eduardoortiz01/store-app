import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/pages/home/home.component';
import { ProductPageComponent } from './component/pages/product-page/product-page.component';
import { CartPageComponent } from './component/pages/cart-page/cart-page.component';

const routes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'search/:searchTerm', component:HomeComponent},
  {path: 'tag/:tag', component:HomeComponent},
  {path: 'product/:id', component:ProductPageComponent},
  {path: 'cart-page', component: CartPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
