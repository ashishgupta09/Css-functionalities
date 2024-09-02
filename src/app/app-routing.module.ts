import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResponsiveCardComponent } from './responsive-card/responsive-card.component';
import { AnimatedTextComponent } from './animated-text/animated-text.component';
import { FormComponent } from './form/form.component';
import { FooterComponent } from './footer/footer.component';
import { AccordionComponent } from './accordion/accordion.component';
import { HeaderComponent } from './header/header.component';
import { ToggleButtonComponent } from './toggle-button/toggle-button.component';
import { InputSearchBoxComponent } from './input-search-box/input-search-box.component';
import { ResizeDashboardComponent } from './resize-dashboard/resize-dashboard.component';
import { AnimatedBackgroundComponent } from './animated-background/animated-background.component';
import { AnimatedWaveBackgroundComponent } from './animated-wave-background/animated-wave-background.component';
import { CarousalComponent } from './carousal/carousal.component';

const routes: Routes = [
  { path: 'card', component: ResponsiveCardComponent },
  { path: 'animated', component: AnimatedTextComponent },
  { path: 'form', component: FormComponent },
  { path: 'footer', component: FooterComponent },
  { path: 'accordion', component: AccordionComponent },
  { path: 'header', component: HeaderComponent },
  { path: 'toggle', component: ToggleButtonComponent },
  { path: 'input-search', component: InputSearchBoxComponent },
  { path: 'dashboard', component: ResizeDashboardComponent },
  { path: 'background', component: AnimatedBackgroundComponent },
  { path: 'wave', component: AnimatedWaveBackgroundComponent },
  { path: 'carousel', component: CarousalComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
