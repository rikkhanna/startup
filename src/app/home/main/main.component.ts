import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private render: Renderer2) { }

  ngOnInit(): void {
  }

  onMouseUp(): void{
    this.render.removeClass(document.body, 'offcanvas-menu');
  }

}
