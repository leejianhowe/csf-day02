import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  transfer: string;
  cartList = new Map();
  cart = [];

  transferToCart(event: string) {
    if (this.cartList.has(event)) {
      this.cartList.set(event, this.cartList.get(event) + 1);
    } else {
      this.cartList.set(event, 1);
    }
    // console.log('cart', this.cartList);
    this.reloadCart()

  }

  reloadCart() {
    let tempCart = [];
    this.cartList.forEach(function (value, key) {
      let obj = {};
      obj['name'] = key;
      obj['amount'] = value;
      console.log(obj);
      tempCart.push(obj);
    });
    this.cart = tempCart;
    
  }

  deleteCar(event: string) {
    this.cartList.delete(event);
    this.reloadCart()
  }
}
