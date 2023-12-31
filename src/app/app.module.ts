import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';

import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CoursesComponent } from './courses/courses.component';
import { CoursesDetailComponent } from './courses-detail/courses-detail.component';
import { ContactInfoComponent } from './contact-info/contact-info.component';
import { ContactDetailsComponent } from './contact-details/contact-details.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'contact',
    component: ContactComponent,
    children: [
      {
        path: 'info',
        component: ContactInfoComponent
      },
      {
        path: 'details',
        component: ContactDetailsComponent
      }
    ]
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'courses/:course',
    component: CoursesDetailComponent
  },
  {
    path: '', // redirecciona path vacio al path del home
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: '**', // esta ruta es para cualquier otra que no este mapeada
    component: PageNotFoundComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    AboutComponent,
    PageNotFoundComponent,
    CoursesComponent,
    CoursesDetailComponent,
    ContactInfoComponent,
    ContactDetailsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
