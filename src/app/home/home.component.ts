import { Component, OnInit } from '@angular/core';
import { TodolistServiceService } from '../services/todolist-service.service';
import { CommonModule } from '@angular/common';
import { ToDo } from '../models/todo.models';
import { HttpHeaders } from '@angular/common/http';
import { TokenServiceService } from '../services/token-service.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  todolist: ToDo[] = [];
  userContext: string = '';
  errorMessage: string = '';
  userUpdateContext: string = '';

  constructor(
    private todoService: TodolistServiceService,
    private tokenService: TokenServiceService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.todoService.getTodolist().subscribe((data) => {
      this.todolist = data;
    });
  }

  postTodoItem() {
    const todoDto = {
      context: this.userContext,
      istoDoDone: false,
    };

    this.todoService
      .postTodoItem(todoDto)
      .subscribe((addedToDo) => this.todolist.push(addedToDo));
  }

  updateToDoList(todo: ToDo) {
    const todoExists = this.todolist.find((t) => t.toDoID === todo.toDoID);
    if (!todoExists) return;

    const updatedTodo = {
      toDoID: todo.toDoID,
      toDoContent: todo.toDoContent,
      istoDoDone: false,
    };

    this.todoService.updateToDoList(updatedTodo).subscribe((response) => {
      // Güncellenen itemi listede bul ve güncelle
      const index = this.todolist.findIndex((t) => t.toDoID === todo.toDoID);
      if (index !== -1) {
        this.todolist[index] = response;
      }
    });
  }

  markAsDone(toDoID: string) {
    const todo = this.todolist.find((t) => t.toDoID === toDoID);
    if (!todo) return;

    const markAsDoneTodo = {
      toDoID: toDoID,
      toDoContent: todo.toDoContent,
      istoDoDone: !todo.istoDoDone,
    };

    this.todoService.updateToDoList(markAsDoneTodo).subscribe((response) => {
      // Güncellenen itemi listede bul ve güncelle
      const index = this.todolist.findIndex((t) => t.toDoID === toDoID);
      if (index !== -1) {
        this.todolist[index] = response;
      }
    });

    return markAsDoneTodo.istoDoDone;
  }

  deleteTodo(toDoID: string) {
    const todo = this.todolist.find((t) => t.toDoID === toDoID);
    if (!todo) return;

    this.todoService.deletToDo(toDoID).subscribe(() => {
      // Silinen öğeyi listeden kaldır
      this.todolist = this.todolist.filter((t) => t.toDoID !== toDoID);
    });
  }
}
