import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AboutMeComponent} from './about-me/about-me.component';
import {HomeComponent} from './home/home.component';
import {ContactsComponent} from './contacts/contacts.component';
import {CvComponent} from './cv/cv.component';
import {PortfolioComponent} from './portfolio/portfolio.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'about', component: AboutMeComponent},
  {path: 'contacts', component: ContactsComponent},
  {path: 'cv', component: CvComponent},
  {path: 'portfolio', component: PortfolioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
