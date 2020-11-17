import { EventEmitter, Injectable, Output } from '@angular/core';
import { Car } from './car.model';
@Injectable()
export class CarInventory {
  @Output() addToCart = new EventEmitter<number>();
  list: Car[] = [
    { name: 'LaFerrari', imagePath: 'LaFerrari.jpg', description: 'red car' },
    {
      name: 'Mercedes',
      imagePath: 'Mercedes.jpg',
      description: 'sliver car',
    },
    {
      name: 'Mclaren',
      imagePath: 'Mclaren.jpg',
      description: 'orange car',
    },
    {
      name: 'Porsche',
      imagePath: 'Porsche.jpg',
      description: 'yellow car',
    },
  ];
  giveList() {
    return this.list.slice();
  }

}
