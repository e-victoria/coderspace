import {Component, ElementRef, ViewChild} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  @ViewChild('siteList')
  private siteList: ElementRef;
  @ViewChild('burgerBtn')
  private burgerBtn: ElementRef;
  @ViewChild('lineToHide')
  private lineToHide: ElementRef;
  @ViewChild('firstLine')
  private firstLine: ElementRef;
  @ViewChild('secondLine')
  private secondLine: ElementRef;
  menuOptions: string[];

  constructor() {
    this.menuOptions = ['Home', 'About me', 'My CV', 'Portfolio', 'Contact'];
  }

  toggleMenu(): void {
    this.siteList.nativeElement.classList.toggle('site-list--visible');
    this.lineToHide.nativeElement.classList.toggle('hide');
    this.firstLine.nativeElement.classList.toggle('cross-first-line');
    this.secondLine.nativeElement.classList.toggle('cross-second-line');
  }

}
