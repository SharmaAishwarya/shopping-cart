import { Component, OnInit } from '@angular/core';
import { CarouselService } from '../services/carousel.service';
import { CAROUSEL } from '../mockCarousel';
import { Carousel } from '../carousel';
@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  images : Carousel[];
  constructor(private carouselService : CarouselService) { }

  ngOnInit() {
    this.Display();
  }
  Display():void{
    this.carouselService.displayAll().subscribe(images => this.images = images);
   
  }

}
