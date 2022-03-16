import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
    
import {  Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
   
import { Favorito } from './favorito';

@Injectable({
  providedIn: 'root'
})
export class FavoritoService {
  private apiURL = "http://localhost:3678/api/"; //port de la api rest";

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
   
  constructor(private httpClient: HttpClient) { }
    
  getAll(): Observable<Favorito[]> {
    return this.httpClient.get<Favorito[]>(this.apiURL + '/favoritos/')
    .pipe(
      catchError(this.errorHandler)
    )
    console.log(this.apiURL);
  }
    
  create(favorito:any): Observable<Favorito> {
    return this.httpClient.post<Favorito>(this.apiURL + '/favorito/', JSON.stringify(favorito), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }  
    
  find(id:any): Observable<Favorito> {
    return this.httpClient.get<Favorito>(this.apiURL + '/favorito/' + id)
    .pipe(
      catchError(this.errorHandler)
    )
  }
    
  update(id:any, favorito:any): Observable<Favorito> {
    return this.httpClient.put<Favorito>(this.apiURL + '/favorito/' + id, JSON.stringify(favorito), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }
    
  delete(id:any){
    return this.httpClient.delete<Favorito>(this.apiURL + '/favorito/' + id, this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }
     
  private errorHandler(err: HttpErrorResponse): Observable<never> {
    return throwError(() => err);
  }
  /*errorHandler(error:any) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return new Error(errorMessage);
 }*/
}