import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class ProductService {
  baseUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = 'http://localhost:8080/';
  }

  public getProducts(): Observable<any> {
    return this.http.get<any>(this.baseUrl + 'products');
  }
}
