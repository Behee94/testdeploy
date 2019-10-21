import { MatCheckboxModule, MatSelectModule, MatInputModule} from '@angular/material';
import { NgModule } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatRadioModule} from '@angular/material/radio';
import {MatIconModule} from '@angular/material/icon';


@NgModule({
  imports: [
      MatButtonModule,
      MatCheckboxModule,
      MatToolbarModule,
      MatCardModule,
      MatDialogModule,
      MatFormFieldModule,
      MatSelectModule,
      MatInputModule,
      MatGridListModule,
      MatRadioModule,
      MatIconModule
    ],
  exports: [
     MatButtonModule,
     MatCheckboxModule,
     MatToolbarModule,
     MatCardModule,
     MatDialogModule,
     MatFormFieldModule,
     MatSelectModule,
     MatInputModule,
     MatGridListModule,
     MatRadioModule,
     MatIconModule
    ],
})
export class MaterialModule { }
