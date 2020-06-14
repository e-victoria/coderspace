import { Component, OnInit } from '@angular/core';
import { faGithub, faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {

  faGithub = faGithub;
  faFacebook = faFacebook;
  faLinkedin = faLinkedin;

  constructor() { }

  ngOnInit(): void {
  }

}
