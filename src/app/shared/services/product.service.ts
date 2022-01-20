import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseUrl: string;
  products = [];

  constructor(private http: HttpClient) {
    this.baseUrl = "http://localhost:8080/"
   }

   public getProducts(){
    this.http.get(this.baseUrl+"products").subscribe(
      (response) =>{ 
        console.log(response)
      }
    )
   }
   
}
