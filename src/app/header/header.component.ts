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

    const hideMenu = (event) => {
      if (!this.siteList.nativeElement.contains(event.target) && !this.burgerBtn.nativeElement.contains(event.target)) {
        this.siteList.nativeElement.classList.remove('site-list--visible');
        this.lineToHide.nativeElement.classList.remove('hide');
        this.firstLine.nativeElement.classList.remove('cross-first-line');
        this.secondLine.nativeElement.classList.remove('cross-second-line');
        document.removeEventListener('click', hideMenu);
      }
    };

    if (this.siteList.nativeElement.classList.contains('site-list--visible')) {
      document.addEventListener('click', hideMenu);
    }
  }

}
