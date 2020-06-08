import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TarshComponent } from './tarsh.component';
import { Routes, RouterModule } from '@angular/router';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
const routes: Routes = [
  {
   path:'',
   component:TarshComponent,
  },


];

@NgModule({
  declarations: [TarshComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatCardModule,
    MatButtonModule,
    MatIconModule
  ]
})
export class TarshModule { }
