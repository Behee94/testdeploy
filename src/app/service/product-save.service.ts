import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductSaveService {
  books: any;
  new = {};
  constructor(private db: AngularFireDatabase) { }
  create(product) {
    return this.db.list('/products').push(product);
  }
  get() {
   // this.books = this.db.list('/products').snapshotChanges();
  return this.books = this.db.list('/products').snapshotChanges();
    }
  getByID(id: string) {
   return this.db.object('/products/' + id).valueChanges();

  }
  update(id: string, product) {
    return this.db.object('/products/' + id).update(product);
  }
  delete(id: string) {
    return this.db.object('/products/' + id).remove();
  }
}
