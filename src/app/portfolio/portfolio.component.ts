import { Component, OnInit } from '@angular/core';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import {PortfolioService} from './portfolio.service';
import IProject from './project';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  projects$: Observable<IProject[]>;

  constructor(private portfolioService: PortfolioService) { }

  ngOnInit(): void {
    this.projects$ = this.portfolioService.getProjectsBasicInfo();
  }

}
