'use strict';

import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ProductService } from './product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductListComponent implements OnInit {
  // Define the product list as an array ...
  products: any = [];

  /**
   * Qualified defauult product list construtor
   */
  constructor (public service: ProductService, private router: Router, private route: ActivatedRoute) { }

  /**
   * Component initializer handler
   */
  ngOnInit() {
    this.fetch();
  }

  fetch() {
    this.service.loadAll().subscribe((payload: {}) => {
      this.products = payload;
      console.log(JSON.stringify(this.products, null, 2));
    });
  }

  add() {
    this.router.navigate(['/product-add']);
  }

  delete(id) {
    this.service.delete(id)
      .subscribe(res => {
          this.fetch();
        }, (err) => {
          console.log(err);
        }
      );
  }
}
