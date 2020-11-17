import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CarInventory } from '../inventory.service';
import { Car } from '../car.model';
@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css'],
})
export class ShoppingCartComponent implements OnInit {
  @Input() cart: {};
  @Output() deleteCar = new EventEmitter<string>();

  inventory: Car[] = this.carInvetory.giveList();

  counter: number = 1;

  constructor(private carInvetory: CarInventory) {}

  ngOnInit(): void {}
  removeItem(name: string) {
    this.deleteCar.emit(name);
  }
}
