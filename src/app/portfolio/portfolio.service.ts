import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import IProject from './project';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  constructor(private http: HttpClient) { }

  getProjectsBasicInfo(): Observable<IProject[]> {
    return this.http.get<IProject[]>(('/api/projects'));
  }
}
