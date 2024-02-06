import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './pages/aboutus/aboutus.component';
import { BlogComponent } from './pages/blog/blog.component';
import { CareerComponent } from './pages/career/career.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { ContactComponent } from './common/contact/contact.component';
import { HomeComponent } from './common/home/home.component';
import { MarketingComponent } from './services/marketing/marketing.component';
import { WebsiteComponent } from './services/website/website.component';
import { BrandingComponent } from './services/branding/branding.component';
import { ServiceComponent } from './pages/service/service.component';
import { ClientreviewComponent } from './home/clientreview/clientreview.component';

const routes: Routes = [
  { path: '',component:HomeComponent},
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutusComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'service', component: ServiceComponent },
  { path: 'otherservice', component: CareerComponent },
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'marketing', component: MarketingComponent },
  { path: 'website', component: WebsiteComponent },
  { path: 'branding', component: BrandingComponent },
  { path: 'Review', component: ClientreviewComponent },

  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
