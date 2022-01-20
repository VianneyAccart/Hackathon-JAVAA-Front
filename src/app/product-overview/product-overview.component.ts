import { Component, OnInit } from '@angular/core';
import { Product } from '../shared/model/product';

@Component({
  selector: 'app-product-overview',
  templateUrl: './product-overview.component.html',
  styleUrls: ['./product-overview.component.css'],
})
export class ProductOverviewComponent implements OnInit {
  products: Product[];
  constructor() {
    this.products = new Array();
    this.products = [
      new Product("Cuisine Complète Jona 120 cm - Bois", 199, "https://cdn.manomano.com/images/images_products/20844971/T/39629738_1.jpg", "https://www.manomano.fr/p/cuisine-complete-jona-120-cm-bois-40385042"),
      new Product("Ensemble de meubles de cuisine 4 pcs Gris brillant Aggloméré", 318.99, "https://cdn.manomano.com/images/images_products/272650/T/37013375_1.jpg", "https://www.manomano.fr/p/ensemble-de-meubles-de-cuisine-4-pcs-gris-brillant-agglomere-37751326"),
      new Product("Meubles Cuisine complète MELA chêne foncé 1m80 - 5 meubles - MOINSCHERCUISINE - CHENE foncé", 249, "https://cdn.manomano.com/images/images_products/2794252/T/32823904_1.jpg", "https://www.manomano.fr/p/meubles-cuisine-complete-mela-chene-fonce-1m80-5-meubles-moinschercuisine-34202918?model_id=34183799"),
      new Product("Cuisine Complète Jona 120 cm - Bois", 199, "https://cdn.manomano.com/images/images_products/20844971/T/39629738_1.jpg", "https://www.manomano.fr/p/cuisine-complete-jona-120-cm-bois-40385042"),
      new Product("Ensemble de meubles de cuisine 4 pcs Gris brillant Aggloméré", 318.99, "https://cdn.manomano.com/images/images_products/272650/T/37013375_1.jpg", "https://www.manomano.fr/p/ensemble-de-meubles-de-cuisine-4-pcs-gris-brillant-agglomere-37751326")
    ]
  }

  ngOnInit(): void {}
}
