import { EventEmitter, Injectable, Output } from '@angular/core';
import { Car } from './car.model';
@Injectable()
export class CarInventory {
  @Output() addToCart = new EventEmitter<number>();
  list: Car[] = [
    { name: 'LaFerrari', imagePath: 'ferrari.jpg', description: 'red car' },
    {
      name: 'Mercedes AMG GTR',
      imagePath: 'mercedes.jpg',
      description: 'sliver car',
    },
    {
      name: 'Mclaren Senna',
      imagePath: 'mclaren.jpg',
      description: 'orange car',
    },
    {
      name: 'Porsche GT3 RS',
      imagePath: 'porsche.jpg',
      description: 'yellow car',
    },
  ];
  giveList() {
    return this.list.slice();
  }
  
}
