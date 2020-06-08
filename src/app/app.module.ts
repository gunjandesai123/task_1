import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared-modules/header/header.component';
import { FooterComponent } from './shared-modules/footer/footer.component';
import { SidebarComponent } from './shared-modules/sidebar/sidebar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// angular matiriel for common
import {MatIconModule} from '@angular/material/icon';
import { ConfirmationDialogComponent } from './shared-modules/confirmation-dialog/confirmation-dialog.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    ConfirmationDialogComponent,
  ],
  entryComponents:[ConfirmationDialogComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatIconModule,
    MatDialogModule,
    MatButtonModule,
    ToastrModule.forRoot(),


  ],
  providers: [],
  bootstrap: [AppComponent],
  exports:[]
})
export class AppModule { }
