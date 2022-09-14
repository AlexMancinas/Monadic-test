import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { Todo } from '../../models/todo';
import { mapCollection, StringedObject } from '../mappers/mappers';
import { IToDo } from '@onboarding/domain';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private readonly MONGO_API_ENDPOINTS = environment.mongoDbApi;

  constructor(
    private readonly httpClient: HttpClient,
  ) { }

  public getAllTodos(): Observable<Array<Todo>> {
    return this.httpClient.get<Array<StringedObject<Todo>>>(this.MONGO_API_ENDPOINTS.GET_ALL_TODOS).pipe(
      mapCollection(),
    );
  }

  public getTodoById(todoId: string): Observable<Todo> {
    return this.httpClient.get<Todo>(this.MONGO_API_ENDPOINTS.GET_TODO_BY_ID + todoId);
  }

  public addNewTodo(newTodo: IToDo): Observable<void> {
    return this.httpClient.post<void>(this.MONGO_API_ENDPOINTS.CREATE_NEW_TODO, newTodo);
  }

  public updateTodo(updatedTodo: Todo): Observable<void> {
    return this.httpClient.patch<void>(this.MONGO_API_ENDPOINTS.UPDATE_TODO_BY_ID + updatedTodo._id as string, updatedTodo);
  }

  public deleteTodo(todoId: string): Observable<void> {
    return this.httpClient.delete<void>(this.MONGO_API_ENDPOINTS.DELETE_TODO_BY_ID + todoId);
  }

}
