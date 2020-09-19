import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { MainComponent } from './main/main.component';

import {
  NavbarModule,
  DropdownModule,
  CardsModule,
  ButtonsModule,
  IconsModule
} from 'angular-bootstrap-md';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    NavbarModule,
    IconsModule,
    RouterModule,
    DropdownModule.forRoot(),
    CardsModule,
    ButtonsModule,
    CarouselModule.forRoot()
  ],
  declarations: [
    HeaderComponent,
    FooterComponent,
    WelcomeComponent,
    MainComponent,
    HomeComponent,
    DashboardComponent,
    PageNotFoundComponent
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    WelcomeComponent,
    MainComponent,
    HomeComponent
  ]
})
export class CoreModule {}
