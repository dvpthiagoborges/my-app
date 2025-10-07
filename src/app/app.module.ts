import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeadComponentComponent } from './components/head-component/head-component.component';
import { FooterComponentComponent } from './components/footer-component/footer-component.component';
import { HomeComponentComponent } from './modules/home-component/home-component.component';
import { MainLayoutComponentComponent } from './layouts/main-layout-component/main-layout-component.component';
import { AuthLayoutComponentComponent } from './layouts/auth-layout-component/auth-layout-component.component';
import { LoginComponentComponent } from './modules/login-component/login-component.component';
import { ProfileComponentComponent } from './modules/profile-component/profile-component.component';
import { AboutComponentComponent } from './modules/about-component/about-component.component';

@NgModule({
  declarations: [
    AppComponent,
    HeadComponentComponent,
    FooterComponentComponent,
    HomeComponentComponent,
    MainLayoutComponentComponent,
    AuthLayoutComponentComponent,
    LoginComponentComponent,
    ProfileComponentComponent,
    AboutComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
