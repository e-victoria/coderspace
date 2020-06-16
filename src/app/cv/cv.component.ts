import { Component, OnInit } from '@angular/core';
import {faCaretRight, faPhoneAlt, faEnvelopeOpen} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.scss']
})
export class CvComponent implements OnInit {

  faCaretRight = faCaretRight;
  faPhoneAlt = faPhoneAlt;
  faEnvelopeOpen = faEnvelopeOpen;

  constructor() { }

  ngOnInit(): void {
  }

  toggleData(event) {
    event.stopPropagation();
    event.currentTarget.parentNode.childNodes[1].classList.toggle('show-flex');
    event.currentTarget.parentNode.querySelector('.cv__section-arrow').classList.toggle('rotate-arrow');
  }

}
