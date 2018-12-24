import { Input, Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-product-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class ProductEditComponent implements OnInit {
  // Binding from data model
  @Input() product: any = {};

  constructor(public service: ProductService, private router: Router, private route: ActivatedRoute) {
    // - nop
  }

  ngOnInit() {
    this.service.load(this.route.snapshot.params['id']).subscribe((payload: {}) => {
      console.log(payload);
      this.product = payload;
    });
  }

  update() {
    this.service.update(this.route.snapshot.params['id'], this.product).subscribe((result) => {
      this.router.navigate(['/product-view/' + result.id]);
    }, (err) => {
      console.log(err);
    });
  }
}
