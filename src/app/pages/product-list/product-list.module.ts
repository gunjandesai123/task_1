import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list.component';
import { Routes, RouterModule } from '@angular/router';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { DetailsComponent } from './details/details.component';

import { NgxImageZoomModule } from 'ngx-image-zoom';
import { AddproductComponent } from './addproduct/addproduct.component';
import { ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {MatRadioModule} from '@angular/material/radio';
import {MatDialogModule} from '@angular/material/dialog';
import { DescPipe } from './desc.pipe';
import { Ng5SliderModule } from 'ng5-slider';
const routes: Routes = [
  {
   path:'',
   component:ProductListComponent,
  },
  {path:'details',
  component: DetailsComponent}

];

@NgModule({
  declarations: [ProductListComponent, DetailsComponent,AddproductComponent, DescPipe],
  entryComponents:[AddproductComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatCheckboxModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    NgxImageZoomModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatSelectModule,
    MatRadioModule,
    MatDialogModule,
    Ng5SliderModule
  ],
  exports:[ReactiveFormsModule]
})
export class ProductListModule { }
