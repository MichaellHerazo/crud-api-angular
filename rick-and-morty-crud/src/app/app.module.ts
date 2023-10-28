import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//moduls
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http"
import { ToastrModule } from 'ngx-toastr';
import { FormsModule } from '@angular/forms'; 

//components
import { NavbarComponent } from './components/navbar/navbar.component';
import { ListItemsComponent } from './components/list-items/list-items.component';
import { AddEditItemsComponent } from './components/add-edit-items/add-edit-items.component';
import { RickAndMortyApiComponent } from './components/rick-and-morty-api/rick-and-morty-api.component';
import { ProgressBarComponent } from './shared/progress-bar/progress-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ListItemsComponent,
    AddEditItemsComponent,
    RickAndMortyApiComponent,
    ProgressBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule, 
    ToastrModule.forRoot({
      timeOut: 5000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
