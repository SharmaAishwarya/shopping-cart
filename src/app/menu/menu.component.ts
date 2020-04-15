import { Component, OnInit } from '@angular/core';
import { category } from '../Category';
import { CategoriesService } from '../services/categories.service'; 
import { Product } from '../product';
import { ProductService } from '../services/product.service'; 

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  categories : category[] ;  
  products:Product[];
  constructor(private categoriesService: CategoriesService,private productService: ProductService) { }

  ngOnInit() {
    this.getCategory();
    this.getProduct();
  }

  getCategory():void{
    this.categoriesService.getCategory().subscribe(categories => this.categories = categories);
   
  }
  getProduct():void{
    this.productService.getProductAll().subscribe(products => this.products = products);
  }


}
