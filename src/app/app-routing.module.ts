import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { JobsComponent } from './jobs/jobs.component';
import { ManufacturingComponent } from './manufacturing/manufacturing.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ReferencesComponent } from './references/references.component';
import { PartnersComponent } from './partners/partners.component';
import { FooterComponent } from './footer/footer.component';

const routes: Routes = [
  { path: 'navbar', component: NavbarComponent},
  { path: 'home', component: HomeComponent},
  { path: 'about', component: AboutComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'jobs', component: JobsComponent},
  { path: 'manufacturing', component: ManufacturingComponent},
  { path: 'partners', component: PartnersComponent},
  { path: 'references', component: ReferencesComponent},
  { path: 'footer', component: FooterComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
