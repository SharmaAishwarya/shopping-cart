import { Injectable } from '@angular/core';
import { Carousel } from '../carousel';
import { CAROUSEL } from '../mockCarousel';
import { Observable , of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarouselService {

  constructor() { }

  displayAll():Observable<Carousel[]>
  {
    return of(CAROUSEL);
  }
 
}
