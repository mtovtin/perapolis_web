import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
import { GtComponent } from './gt/gt.component';
import { Gt1Component } from './gt1/gt1.component';
import { Gt2Component } from './gt2/gt2.component';
import { Gt3Component } from './gt3/gt3.component';
import { Gt4Component } from './gt4/gt4.component';
import { Gt5Component } from './gt5/gt5.component';
import { Gt6Component } from './gt6/gt6.component';
import { Gt7Component } from './gt7/gt7.component';
import { Gt8Component } from './gt8/gt8.component';
import { Gt9Component } from './gt9/gt9.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { Gt10Component } from './gt10/gt10.component';
import { Gt11Component } from './gt11/gt11.component';


const routes: Routes = [
  {path: '', component: AboutComponent},
  { path: 'about-component', component: AboutComponent },
  { path: 'services-component', component: ServicesComponent },
  { path: 'gt-component', component: GtComponent },
  { path: 'gt1-component', component: Gt1Component },
  {path: 'gt2-component', component: Gt2Component},
  {path: 'gt3-component', component: Gt3Component},
  {path: 'gt4-component', component: Gt4Component},
  {path: 'gt5-component', component: Gt5Component},
  {path: 'gt6-component', component: Gt6Component},
  {path: 'gt7-component', component: Gt7Component},
  {path: 'gt8-component', component: Gt8Component},
  {path: 'gt9-component', component: Gt9Component},
  {path: 'gt10-component', component: Gt10Component},
  {path: 'gt11-component', component: Gt11Component},
  {path: 'portfolio-component', component: PortfolioComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
