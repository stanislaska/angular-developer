import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-vew',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ProductViewComponent implements OnInit {
  // Single loaded product instance
  product: any;

  constructor(public service: ProductService, private route: ActivatedRoute) {
    // - nop
  }

  ngOnInit() {
    this.service.load(this.route.snapshot.params['id']).subscribe((payload: {}) => {
      console.log(JSON.stringify(payload, null, 2));
      this.product = payload;
    });
  }
}
