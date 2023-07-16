import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BannerComponent } from './banner/banner.component';
import { FooterComponent } from './footer/footer.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { AdminModule } from './admin/admin.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import {AuthModule} from './auth/auth.module';
import {ClientModule} from './client/client.module'
import { ProductsModule } from './products/products.module';
import { ProviderData } from './provider/provider-data';
import { SearchComponent } from './search/search.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BannerComponent,
    FooterComponent,
    AboutusComponent,
    ContactusComponent,
    SearchComponent,    
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    AdminModule,
    HttpClientModule,
    AuthModule,
    ClientModule,
    ProductsModule,
    
    
    

  ],
  exports:[ReactiveFormsModule],
  providers: [ProviderData],
  bootstrap: [AppComponent]
})
export class AppModule { }
