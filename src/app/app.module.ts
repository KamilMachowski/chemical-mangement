import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { MainComponent } from './main/main.component';
import { LoginComponent } from './login/login.component';
import { SuccessComponent } from './success/success.component';
import { ReadComponent } from './read/read.component';
import { UpdateComponent } from './update/update.component';
import { CreateComponent } from './create/create.component';
import { DeleteComponent } from './delete/delete.component';
import { HttpClientModule } from '@angular/common/http';
import { ConfigComponent } from './config/config.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    MainComponent,
    LoginComponent,
    SuccessComponent,
    ReadComponent,
    UpdateComponent,
    CreateComponent,
    DeleteComponent,
    ConfigComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
