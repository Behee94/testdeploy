import { Component } from '@angular/core';
// import { trigger, transition, style, animate } from '@angular/animations';
import { fade, slide, todo } from '../animations/animate';

@Component({
  selector: 'app-anim',
  templateUrl: './anim.component.html',
  styleUrls: ['./anim.component.css'] ,
  animations: [
    slide,
    todo
  ]
})
export class AnimComponent  {

  items = ['PHP', 'Laravel', 'ionic'];
  constructor() { }

  add(itemInput) {
    this.items.splice(0, 0, itemInput.value);
    itemInput.value = '';
  }
  remove(item) {
    let index;
    index = this.items.indexOf(item);
    this.items.splice(index, 1);
  }

}
