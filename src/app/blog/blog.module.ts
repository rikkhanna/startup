import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';
import { BlogsComponent } from './blogs/blogs.component';
import { BlogCardComponent } from './blog-card/blog-card.component';


@NgModule({
  declarations: [BlogsComponent, BlogCardComponent],
  imports: [
    CommonModule,
    BlogRoutingModule
  ]
})
export class BlogModule { }
