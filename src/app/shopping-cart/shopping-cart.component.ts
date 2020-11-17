import { Component, OnInit } from '@angular/core';
import { CarInventory } from '../inventory.service';
import { Car } from '../car.model';
@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css'],
})
export class ShoppingCartComponent implements OnInit {
  shoppingCart: number[] = [0, 0, 0, 0];

  inventory: Car[] = this.carInvetory.giveList();

  counter: number = 1;

  constructor(private carInvetory: CarInventory) {}

  ngOnInit(): void {
    this.carInvetory.addToCart.subscribe((index: number) => {
      this.shoppingCart[index]++;
      // console.log(this.shoppingCart);
    });
  }
  removeItem(index:number) {
    this.shoppingCart[index]--;
  }
}
