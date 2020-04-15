import { Injectable } from '@angular/core';
import { category } from '../Category';
import { CATEGORY } from '../mockCategories';
import { Product } from '../product';
import { Observable , of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  getCategory(): Observable<category[]>{
    return of(CATEGORY);
  }
  constructor() { }
}
