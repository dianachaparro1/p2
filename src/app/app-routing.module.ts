import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { ViewSecondComponent } from './Components/Generals/view-second/view-second.component';
import { ViewFirstComponent } from './Components/Generals/view-first/view-first.component';

const routes: Routes = [

  {path: '', component: HomeComponent},
  {path: 'view-first', component: ViewFirstComponent},
  {path: 'view-second', component: ViewSecondComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
