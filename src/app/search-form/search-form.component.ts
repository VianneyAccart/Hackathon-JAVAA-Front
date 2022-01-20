import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';



@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {
  categoryControl = new FormControl();
  minControl = new FormControl();
  maxControl = new FormControl();

  // Used for API request
  category: string | undefined;
  min: number | undefined;
  max: number | undefined;

  options: string[] = ['Rénover une salle de bain', 'Rénover une cuisine', 'Rénover une chambre d\'enfant', 'Rénover ses toilettes'];
  filteredOptions: Observable<string[]> | undefined;



  constructor() { }

  onSubmit() {
    const request = new FormData();
    request.append("category", this.categoryControl.value);
    request.append("min", this.minControl.value);
    request.append("max", this.maxControl.value);

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
