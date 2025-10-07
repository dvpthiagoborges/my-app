import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponentComponent } from './modules/home-component/home-component.component';
import { MainLayoutComponentComponent } from './layouts/main-layout-component/main-layout-component.component';
import { ProfileComponentComponent } from './modules/profile-component/profile-component.component';
import { AboutComponentComponent } from './modules/about-component/about-component.component';

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponentComponent,
    children: [
      { path: '', component: HomeComponentComponent }
    ]
  },
  {
    path: '',
    component: MainLayoutComponentComponent,
    children: [
      { path: 'home', component: HomeComponentComponent },
      { path: '', redirectTo: 'home', pathMatch: 'full' }
    ]
  },
  {
    path: '',
    component: MainLayoutComponentComponent,
    children: [
      { path: 'profile', component: ProfileComponentComponent },
      { path: '', redirectTo: 'profile', pathMatch: 'full' }
    ]
  },
  {
    path: '',
    component: MainLayoutComponentComponent,
    children: [
      { path: 'about', component: AboutComponentComponent },
      { path: '', redirectTo: 'about', pathMatch: 'full' }
    ]
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
