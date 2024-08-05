import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ResizableDirective } from 'src/directives/resizable.directive';
import { AccordionComponent } from './accordion/accordion.component';
import { AnimatedBackgroundComponent } from './animated-background/animated-background.component';
import { AnimatedTextComponent } from './animated-text/animated-text.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarouselImageComponent } from './carousel-image/carousel-image.component';
import { ColorAnimationButtonComponent } from './color-animation-button/color-animation-button.component';
import { CustomTabComponent } from './custom-tab/custom-tab.component';
import { FooterComponent } from './footer/footer.component';
import { FormComponent } from './form/form.component';
import { GradientTextComponent } from './gradient-text/gradient-text.component';
import { HeaderComponent } from './header/header.component';
import { InputSearchBoxComponent } from './input-search-box/input-search-box.component';
import { LoadingAnimationComponent } from './loading-animation/loading-animation.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ResizeDashboardComponent } from './resize-dashboard/resize-dashboard.component';
import { ResponsiveCardComponent } from './responsive-card/responsive-card.component';
import { ToggleButtonComponent } from './toggle-button/toggle-button.component';
import { AnimatedWaveBackgroundComponent } from './animated-wave-background/animated-wave-background.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    NavbarComponent,
    FooterComponent,
    ResponsiveCardComponent,
    CarouselImageComponent,
    CustomTabComponent,
    LoadingAnimationComponent,
    ColorAnimationButtonComponent,
    AnimatedTextComponent,
    GradientTextComponent,
    AccordionComponent,
    HeaderComponent,
    ToggleButtonComponent,
    InputSearchBoxComponent,
    ResizeDashboardComponent,
    ResizableDirective,
    AnimatedBackgroundComponent,
    AnimatedWaveBackgroundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
