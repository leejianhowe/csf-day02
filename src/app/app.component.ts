import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'csf-day02';
  transfer: string;
  cartList: { name: string; amount: number }[] = [];

  found: boolean = false;
  transferToCart(event: string) {
    console.log('event', event);
    console.log(this.cartList.length);

    if (this.cartList.length) {
      for (let i = 0; i < this.cartList.length; i++) {
        if (this.cartList[i].name === event) {
          this.cartList[i].amount++;
          this.found = true;
          break;
        }
      }
      if (!this.found) {
        console.log(this.found);
        let obj = { name: event, amount: 1 };
        this.cartList.push(obj);
      }
    } else {
      let obj = { name: event, amount: 1 };
      this.cartList.push(obj);
    }
    this.found = false;

    console.log('cart', this.cartList);
  }

  deleteCar(event) {
    for (let i = 0; i < this.cartList.length; i++) {
      if (event === this.cartList[i].name) {
        this.cartList.splice(i, 1);
      }
    }
  }
}
