import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HeaderComponent } from './header/header.component';
import { ServicesComponent } from './services/services.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { BlockcoverComponent } from './blockcover/blockcover.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { ContactModule } from '../contact/contact.module';


@NgModule({
  declarations: [HeaderComponent, ServicesComponent, AboutMeComponent, FooterComponent, MainComponent, BlockcoverComponent, TestimonialsComponent],
  imports: [
    CommonModule,
    HomeRoutingModule
 
  ],
  exports:[
    HeaderComponent,
    FooterComponent,
    BlockcoverComponent
  ]
})
export class HomeModule { }
