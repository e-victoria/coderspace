import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  menuOptions: string[];

  constructor() {
    this.menuOptions = ['Home', 'About me', 'My CV', 'Portfolio', 'Contact'];
  }

}
