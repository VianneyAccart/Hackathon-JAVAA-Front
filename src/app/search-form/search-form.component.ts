import { HttpClient } from '@angular/common/http';
import { asLiteral } from '@angular/compiler/src/render3/view/util';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { Category } from '../shared/model/categories';
import { CategoryService } from '../shared/services/category.service';
import { ProductService } from '../shared/services/product.service';
import { SearchService } from '../shared/services/search.service';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css'],
})
export class SearchFormComponent implements OnInit {
  categoryControl = new FormControl();
  minControl = new FormControl();
  maxControl = new FormControl();
  options: string[] = [
    'Rénover une salle de bain',
    'Rénover une cuisine',
    "Rénover une chambre d'enfant",
    'Rénover ses toilettes',
  ];
  filteredOptions: Observable<string[]> | undefined;

  constructor(private router: Router, private searchService: SearchService) {}

  onSubmit() {
    const request = new FormData();
    let optionBecomesId: string = '';
    if (this.categoryControl.value === 'Rénover une salle de bain')
      optionBecomesId = '1';
    if (this.categoryControl.value === 'Rénover une cuisine')
      optionBecomesId = '2';
    if (this.categoryControl.value === "Rénover une chambre d'enfant")
      optionBecomesId = '3';
    if (this.categoryControl.value === 'Rénover ses toilettes')
      optionBecomesId = '4';
    request.append('projectCategoryId', optionBecomesId);
    request.append('budgetMin', this.minControl.value);
    request.append('budgetMax', this.maxControl.value);
    request.append('projectCategoryName', this.categoryControl.value);

    this.searchService.search(request);

    if (this.router.url !== '/resultats') {
      this.router.navigate(['/resultats']);
    } else {
      setTimeout(() => {
        window.location.reload();
      }, 500);

      // let currentUrl = this.router.url;
      // this.router.routeReuseStrategy.shouldReuseRoute = () => false;
      // this.router.onSameUrlNavigation = 'reload';

      // this.router.navigate([currentUrl]);
    }
  }

  ngOnInit() {
    this.filteredOptions = this.categoryControl.valueChanges.pipe(
      startWith(''),
      map((value) => this._filter(value))
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter((option) =>
      option.toLowerCase().includes(filterValue)
    );
  }
}
