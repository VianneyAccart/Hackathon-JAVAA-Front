import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseUrl: string;
  products:any = [];

  constructor(private http: HttpClient) {
    this.baseUrl = "http://localhost:8080/"
   }

   public getProducts(){
    this.http.get(this.baseUrl+"products").subscribe(
      (response) =>{ 
        if(response =! undefined) {
          this.products.push(response)
        }
        // console.log(response);
      }
    )
   }

}
