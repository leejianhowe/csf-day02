import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Car } from '../car.model';
import { CarInventory } from '../inventory.service';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css'],
})
export class InventoryComponent implements OnInit {
  inventory: Car[];
  @Output() addToCart = new EventEmitter<string>();
  
  constructor(private carInventory: CarInventory) {}

  ngOnInit(): void {
    this.inventory = this.carInventory.giveList();
    // console.log(this.inventory);
  }
  // onAdd(event) {
  //   // console.log(event)
  //   this.carInventory.addToCart.emit(event)
  // }
  onAdd(event) {
    // console.log(event)
    this.addToCart.emit(event)
  }
}
