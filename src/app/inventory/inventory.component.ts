import { Component, OnInit } from '@angular/core';
import { Car } from '../car.model';
import { CarInventory } from '../inventory.service';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css'],
})
export class InventoryComponent implements OnInit {
  inventory: Car[];
  constructor(private carInventory: CarInventory) {}

  ngOnInit(): void {
    this.inventory = this.carInventory.giveList();
    console.log(this.inventory);
  }
  onAdd(event) {
    // console.log(event)
    this.carInventory.addToCart.emit(event)
  }
}
