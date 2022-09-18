import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private http: HttpClient) { }

  public checkIfUserIsAllowed(token: string): Observable<any> {
    // Fetch User Credebility and Return Valadity.
    console.log('Request Received In Guard');
    return this.http.get('https://jsonplaceholder.typicode.com/todos/2');
  }
}
