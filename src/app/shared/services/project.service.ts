import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  baseUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = 'http://localhost:8080/';
  }

  public getProjects(): Observable<any> {
    return this.http.get<any>(this.baseUrl + 'projects');
  }

  public getProjectById(id: number): Observable<any> {
    return this.http.get<any>(this.baseUrl + 'projects/' + id);
  }
}
