import { Component, OnInit } from '@angular/core';
import { imagesUrl } from 'src/environments/environment';
import { ProductService } from '../shared/services/product.service';

@Component({
  selector: 'app-product-unavoidable-overview',
  templateUrl: './product-unavoidable-overview.component.html',
  styleUrls: ['./product-unavoidable-overview.component.css']
})
export class ProductUnavoidableOverviewComponent implements OnInit {

  products: any;
  imageUrl: string = imagesUrl;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getUnavoidableProducts().subscribe(response => {
      this.products = response;
    });
  }
}
