import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResponsiveCardComponent } from './responsive-card/responsive-card.component';

const routes: Routes = [
  {path:'card',component:ResponsiveCardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
