import { Injectable } from '@angular/core';
import { Product } from '../product';
import { Observable , of } from 'rxjs';
import { PRODUCTS } from '../mockProduct';

@Injectable({
  providedIn: 'root'
})
export class ProductService {


  getProductAll():Observable<Product[]>{
    return of(PRODUCTS);
  }

  getProduct(id:number):Observable<Product>{
    if(PRODUCTS.some(p => p.id === id))
    return of((PRODUCTS.filter(p => p.id === id))[0]);
  }
  constructor() { }
}
