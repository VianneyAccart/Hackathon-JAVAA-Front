import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  baseUrl: string = 'http://localhost:8080/project-category/budget';
  searchProperties: FormData | undefined;

  constructor(private http: HttpClient) {}

  search(formData: FormData) {
    this.searchProperties = formData;
    this.http.post(this.baseUrl, formData).subscribe(
      (response) => console.log(response),
      (error) => console.log(error)
    );
  }
}
