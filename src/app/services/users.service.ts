import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Users } from '../models/users';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private apiUrl = 'http://localhost:3000/users';

  constructor(private http: HttpClient) {}

  getAllUsers(): Observable<Users[]> {
    return this.http.get<Users[]>(this.apiUrl);
  }

  createUser(user: Users): Observable<Users> {
    return this.http.post<Users>(this.apiUrl, user);
  }

  getOneUser(id: number): Observable<Users> {
    return this.http.get<Users>(`${this.apiUrl}/${id}`);
  }

  deleteUser(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  getUserById(id: number): Observable<Users> {
    return this.http.get<Users>(`${this.apiUrl}/${id}`);
  }

  updateUser(id: number, user: Users): Observable<Users> {
    return this.http.put<Users>(`${this.apiUrl}/${id}`, user);
  }

}