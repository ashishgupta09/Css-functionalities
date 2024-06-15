import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { FormComponent } from './form/form.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ResponsiveCardComponent } from './responsive-card/responsive-card.component';
import { SideNavbarComponent } from './side-navbar/side-navbar.component';
import { CarouselImageComponent } from './carousel-image/carousel-image.component';
import { CustomTabComponent } from './custom-tab/custom-tab.component';
import { LoadingAnimationComponent } from './loading-animation/loading-animation.component';
import { ColorAnimationButtonComponent } from './color-animation-button/color-animation-button.component';
import { AnimatedTextComponent } from './animated-text/animated-text.component';
import { GradientTextComponent } from './gradient-text/gradient-text.component';
import { SidenavBodyComponent } from './sidenav-body/sidenav-body.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    SideNavbarComponent,
    NavbarComponent,
    FooterComponent,
    ResponsiveCardComponent,
    CarouselImageComponent,
    CustomTabComponent,
    LoadingAnimationComponent,
    ColorAnimationButtonComponent,
    AnimatedTextComponent,
    GradientTextComponent,
    SidenavBodyComponent
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
