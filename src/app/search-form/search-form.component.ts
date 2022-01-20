import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { Category } from '../shared/model/categories';
import { ProductService } from '../shared/services/product.service';



@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {
  categoryControl = new FormControl();
  minControl = new FormControl();
  maxControl = new FormControl();
  categories:Category[] = [
    new Category(1,"Rénover une salle de bain")
  ]
  

  options: string[] = ['Rénover une salle de bain', 'Rénover une cuisine', 'Rénover une chambre d\'enfant', 'Rénover ses toilettes'];
  filteredOptions: Observable<string[]> | undefined;



  constructor() { }

  onSubmit() {
    const request = new FormData();
    request.append("projectCategoryId", this.categoryControl.value);
    request.append("budgetMin", this.minControl.value);
    request.append("budgetMax", this.maxControl.value);

    for (let pair of request.entries()) {
      console.log(pair[0] + ':' + pair[1]);
    }
  }

  ngOnInit() {
    this.filteredOptions = this.categoryControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value)),
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }
}
