import { IshoppingCartItems } from './IshoppingCartItems';
export class IshoppingCart {

constructor(private items: IshoppingCartItems[]) {}
get getTotal() {   // une ppté
    let counter;
    counter = 0;
    // tslint:disable-next-line:forin
    let productID;
    // tslint:disable-next-line:forin
    for (productID in this.items) {
      counter += this.items[productID].quantity;
    }
    return counter;
}
get productids() {
  return Object.keys(this.items);
}
}
