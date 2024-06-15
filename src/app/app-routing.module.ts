import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResponsiveCardComponent } from './responsive-card/responsive-card.component';
import { AnimatedTextComponent } from './animated-text/animated-text.component';
import { FormComponent } from './form/form.component';

const routes: Routes = [
  {path:'card',component:ResponsiveCardComponent},
  {path:'animated',component:AnimatedTextComponent},
  {path:'form',component:FormComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
