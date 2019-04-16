import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.css']
})
export class PageHeaderComponent {

  @Input('titulo-pagina') tituloPagina: string
  @Input('show-button') showButton: boolean = true
  @Input('button-text') buttonText: string
  @Input('button-link') buttonLink: string
  @Input('button-class') buttonClass: string

  constructor() { }
}
