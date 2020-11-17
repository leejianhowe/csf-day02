import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { InventoryComponent } from './inventory/inventory.component';
import { CarInventory } from './inventory.service';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatGridListModule } from '@angular/material/grid-list';
@NgModule({
  declarations: [AppComponent, ShoppingCartComponent, InventoryComponent],
  imports: [BrowserModule, NoopAnimationsModule, MatGridListModule],
  providers: [CarInventory],
  bootstrap: [AppComponent],
})
export class AppModule {}
