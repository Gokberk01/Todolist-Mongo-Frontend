import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ToDo } from '../models/todo.models';
import { TokenServiceService } from './token-service.service';
import { todoDto } from '../models/todoDto.models';

@Injectable({
  providedIn: 'root',
})
export class TodolistServiceService {
  //private apiUrl = 'http://localhost:5136/api/todolist';  //FOR POSTGRESQL
  private apiUrl = 'http://localhost:5173/api/todo';  //FOR MONGODB

  constructor(
    private http: HttpClient,
    private tokenService: TokenServiceService
  ) {}

  getTodolist(): Observable<ToDo[]> {
    const token = this.tokenService.getJwtToken(); // Token'ı alın
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get<ToDo[]>(this.apiUrl, { headers });
  }

  postTodoItem(todoDto: todoDto): Observable<ToDo> {
    const token = this.tokenService.getJwtToken(); // Token'ı alın
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.post<ToDo>(this.apiUrl, todoDto, { headers });
  }

  updateToDoList(todo: ToDo): Observable<ToDo> {
    const token = this.tokenService.getJwtToken(); // Token'ı alın
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.put<ToDo>(`${this.apiUrl}/${todo.toDoID}`, todo, {
      headers,
    });
  }

  deletToDo(todoID: string): Observable<any> {
    const token = this.tokenService.getJwtToken(); // Token'ı alın
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.delete<any>(`${this.apiUrl}/${todoID}`, {
      headers,
    });
  }
}
