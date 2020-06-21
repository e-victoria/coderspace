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
  hardSkills: string[];
  softSkills: string[];

  constructor() { }

  ngOnInit(): void {
    this.hardSkills = ['Angular', 'Javascript', 'Node.js', 'Express.js', 'Html/Css/Scss', 'Gulp', 'Webpack', 'Babel', 'Pixel Perfect',
      'MongoDb', 'Postgres', 'SqlLite', 'Jasmine', 'JUnit', 'Firebase', 'OOP', 'Java', 'Python', 'Terminal command line', 'Nginx',
      'Cloudflare', 'Git', 'Figma'];
    this.softSkills = ['Highly motivated', 'Quick learner', 'Team player', 'Time management', 'Problem solving', 'Empathy (no doubt)', 'Adaptability'];
  }

  toggleData(event) {
    event.stopPropagation();
    event.currentTarget.parentNode.childNodes[1].classList.toggle('show-flex');
    event.currentTarget.parentNode.querySelector('.cv__section-arrow').classList.toggle('rotate-arrow');
  }

}
