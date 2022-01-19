import { Component, OnInit } from '@angular/core';
import { Product } from '../shared/model/product';

@Component({
  selector: 'app-product-overview',
  templateUrl: './product-overview.component.html',
  styleUrls: ['./product-overview.component.css']
})
export class ProductOverviewComponent implements OnInit {
  products : Product[] | undefined;
  constructor() { }

  ngOnInit(): void {
  }

}
