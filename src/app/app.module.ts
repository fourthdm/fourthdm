import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {IvyCarouselModule} from 'angular-responsive-carousel';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './common/navbar/navbar.component';
import { FooterComponent } from './common/footer/footer.component';
import { ContactComponent } from './common/contact/contact.component';
import { HomeComponent } from './common/home/home.component';
import { AboutusComponent } from './pages/aboutus/aboutus.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { CareerComponent } from './pages/career/career.component';
import { BlogComponent } from './pages/blog/blog.component';
import { ServiceComponent } from './pages/service/service.component';
import { FontComponent } from './home/font/font.component';
import { BrandingComponent } from './services/branding/branding.component';
import { MarketingComponent } from './services/marketing/marketing.component';
import { WebsiteComponent } from './services/website/website.component';
import { CountingComponent } from './home/counting/counting.component';
import { ClientsComponent } from './home/clients/clients.component';
import { ClientreviewComponent } from './home/clientreview/clientreview.component';
import { CardsComponent } from './pages/cards/cards.component';
import { CsComponent } from './pages/cs/cs.component';

import { register } from 'swiper/element/bundle';
// register Swiper custom elements
register();

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    ContactComponent,
    HomeComponent,
    AboutusComponent,
    PortfolioComponent,
    CareerComponent,
    BlogComponent,
    ServiceComponent,
    FontComponent,
    BrandingComponent,
    MarketingComponent,
    WebsiteComponent,
    CountingComponent,
    ClientsComponent,
    ClientreviewComponent,
    CardsComponent,
    CsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    IvyCarouselModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
