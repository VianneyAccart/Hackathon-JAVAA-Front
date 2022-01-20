import { Component, OnInit } from '@angular/core';
import { imagesUrl } from 'src/environments/environment';
import { Product } from '../shared/model/product';
import { ProductService } from '../shared/services/product.service';

@Component({
  selector: 'app-product-overview',
  templateUrl: './product-overview.component.html',
  styleUrls: ['./product-overview.component.css'],
})
export class ProductOverviewComponent implements OnInit {
  products: any;
  imageUrl: string = imagesUrl;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe(response => {
      this.products = response;
    });
  }
}
