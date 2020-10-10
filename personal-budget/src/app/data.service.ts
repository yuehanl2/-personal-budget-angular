import { Injectable } from '@angular/core';
import {Observable, of, from } from 'rxjs';
import {map} from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
//import { HttpErrorResponse } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class DataService {

  private URL = 'http://localhost:3000/budget';

  constructor(private httpClient: HttpClient) { }

  // tslint:disable-next-line: typedef
  public getBudget(): Observable<any[]>{
    return this.httpClient.get<any[]>(this.URL);
  }
}
