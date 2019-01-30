import { Component, Input } from '@angular/core';
import { collapsed } from '../animations/animate';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css'],
  animations: [
    collapsed
  ]
})
export class OrdersComponent {
  // tslint:disable-next-line:no-input-rename
  @Input('title') title: string;
  isExpanded = true;
  constructor() { }

  toogle() {
    this.isExpanded = !this.isExpanded;
  }
}
