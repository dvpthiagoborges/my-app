import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponentComponent } from './modules/home-component/home-component.component';
import { MainLayoutComponentComponent } from './layouts/main-layout-component/main-layout-component.component';
import { PerfilComponentComponent } from './modules/perfil-component/perfil-component.component';

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
      { path: 'perfil', component: PerfilComponentComponent },
      { path: '', redirectTo: 'perfil', pathMatch: 'full' }
    ]
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
