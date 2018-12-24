'use strict';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProductService} from './product.service';
import { FormsModule } from '@angular/forms';

import { ProductListComponent } from './product.component';
import { ProductViewComponent } from './view/view.component';
import { ProductEditComponent } from './edit/edit.component';

const appRoutes: Routes = [
  {
    path: 'products',
    component: ProductListComponent,
    data: { title: 'Product List' }
  },
  {
     path: 'product-view/:id',
     component: ProductViewComponent,
     data: { title: 'Product View' }
   },
   {
     path: 'product-update/:id',
     component: ProductEditComponent,
     data: { title: 'Product Edit' }
   },
  { path: '',
    redirectTo: '/products',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    ProductListComponent,
    ProductViewComponent,
    ProductEditComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    CommonModule,
    FormsModule
  ],
  exports: [RouterModule],
  providers: [ProductService]
})
export class AppProductModule { }
