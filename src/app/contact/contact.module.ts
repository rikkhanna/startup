import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactRoutingModule } from './contact-routing.module';
import { FormComponent } from './form/form.component';
import { HomeModule } from '../home/home.module';
import { MainComponent } from './main/main.component';


@NgModule({
  declarations: [FormComponent, MainComponent],
  imports: [
    CommonModule,
    ContactRoutingModule,
    HomeModule
  ]
})
export class ContactModule { }
