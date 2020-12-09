import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { MainRoutingModule } from './main-routing.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BodyComponent } from './body/body.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { AcademicsComponent } from './academics/academics.component';
import { FacilitiesComponent } from './facilities/facilities.component';
import { ResultsComponent } from './results/results.component';
import { PlacementComponent } from './placement/placement.component';
import { AdmissionsComponent } from './admissions/admissions.component';
import { CarouselComponent } from './carousel/carousel.component';
import { AffiliationComponent } from './affiliation/affiliation.component';
import { NewsEventComponent } from './news-event/news-event.component';
import { GalleryComponent } from './gallery/gallery.component';



@NgModule({
  declarations: [
    MainComponent, 
    HeaderComponent, 
    FooterComponent, 
    BodyComponent, 
    HomeComponent, 
    AboutUsComponent, 
    AcademicsComponent, 
    FacilitiesComponent, 
    ResultsComponent, 
    PlacementComponent, 
    AdmissionsComponent, 
    CarouselComponent, 
    AffiliationComponent, 
    NewsEventComponent, 
    GalleryComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule
  ]
})
export class MainModule { }
