import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CoverComponent } from './cover/cover.component';
import { FooterComponent } from './footer/footer.component';
import { CardsComponent } from './cards/cards.component';
import { CarouselComponent } from './carousel/carousel.component';
import { FormComponent } from './form/form.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { from } from 'rxjs';
import { ProjectsComponent } from './projects/projects.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ProjectsSectionComponent } from './projects-section/projects-section.component';
import { ProfileComponent } from './profile/profile.component';
import { ProfileSectionComponent } from './profile-section/profile-section.component';
import { ProfilesService } from './profiles.service';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes =[
  {path: 'home', component: HomeComponent},
  {path: 'aboutUs', component:AboutUsComponent},
  {path: 'projects', component:ProjectsSectionComponent},
  {path: 'profiles', component:ProfileSectionComponent},
  {path: '', redirectTo:'/home', pathMatch:'full'},
  {path: '**', component:PageNotFoundComponent}
  

]



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CoverComponent,
    FooterComponent,
    CardsComponent,
    CarouselComponent,
    FormComponent,
    HomeComponent,
    ProjectsComponent,
    AboutUsComponent,
    ProjectsSectionComponent,
    ProfileComponent,
    ProfileSectionComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
 
  ],
  providers: [ProfilesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
