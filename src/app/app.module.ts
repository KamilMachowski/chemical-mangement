import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { MainComponent } from './main/main.component';
import { LoginComponent } from './login/login.component';
import { SuccessComponent } from './success/success.component';
import { ReadComponent } from './read/read.component';
import { CreateComponent } from './create/create.component';
import { DeleteComponent } from './delete/delete.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    MainComponent,
    LoginComponent,
    SuccessComponent,
    ReadComponent,
    CreateComponent,
    DeleteComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    MatSelectModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
