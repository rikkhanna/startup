import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private render: Renderer2) { }

  ngOnInit(): void {
    
  }

  onToggle(): void{
    this.render.addClass(document.body, 'offcanvas-menu');
  }
  onToggleClose(): void{
    this.render.removeClass(document.body, 'offcanvas-menu');
  }

  
}
