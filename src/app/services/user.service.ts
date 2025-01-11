import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, delay } from 'rxjs';
import { User } from '../interface/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private http = inject(HttpClient);
  private apiUrl = '/api/data/';

  // Método para obtener los datos
  getAllUsers(): Observable<User[]> {
    return this.http
      .get<User[]>(this.apiUrl)
      .pipe(delay(2000));
  }

  getUserById(id: number): Observable<User> {
    return this.http
      .get<User>(this.apiUrl+id)
      .pipe(delay(2000))
  }
}
