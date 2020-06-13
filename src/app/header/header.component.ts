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
  @ViewChild('firstBtnLine')
  private firstBtnLine: ElementRef;
  menuOptions: string[];

  constructor() {
    this.menuOptions = ['Home', 'About me', 'My CV', 'Portfolio', 'Contact'];
  }

  toggleMenu(): void {
    this.siteList.nativeElement.classList.toggle('show-flex');

    if (this.siteList.nativeElement.classList.contains('show-flex')) {
      this.firstBtnLine.nativeElement.classList.toggle('hide');
    }
  }

}
