import { Body, Controller, Delete, Get, HttpStatus, Param, Patch, Post, Res } from '@nestjs/common';
import { ToDo } from './domain/schemas/todo.schema';
import { ToDoService } from './use-cases/todo.service';
import { Response } from 'express';
@Controller()
export class AppController {
  constructor(private readonly todoService: ToDoService) { }

  private readonly successTaskFactory = (response: Response, taskResponse: any) => response.status(HttpStatus.OK).json(taskResponse);
  private readonly failureTaskFactory = (response: Response, taskResponse: any) => response.status(HttpStatus.INTERNAL_SERVER_ERROR).json(taskResponse);

  @Get('handShake')
  public handShake(): string {
    return 'Handshake'
  }

  @Post('create')
  public async createToDo(@Res() response: Response, @Body() newTodo: ToDo): Promise<any> {
    try {
      const createToDoTask = await this.todoService.createNewTodo(newTodo);
      return this.successTaskFactory(response, createToDoTask)
    } catch (error) {
      return this.failureTaskFactory(response, error);
    }
  }

  @Delete('delete/:id')
  public async deleteTodoById(
    @Res() response: Response,
    @Param('id') toDoId: string,
  ) {
    try {
      const deleteTask = await this.todoService.deleteToDoById(toDoId);
      return this.successTaskFactory(response, deleteTask);
    } catch (error) {
      return this.failureTaskFactory(response, error);
    }
  }

  @Get('all')
  public async getToDoList(
    @Res() response: Response
  ) {
    try {
      const todoList = await this.todoService.getToDoList();
      return this.successTaskFactory(response, todoList);
    } catch (error) {
      return this.failureTaskFactory(response, error);
    }
  }

  @Get('getTodoById/:id')
  public async getTodoById(
    @Res() response: Response,
    @Param('id') toDoId: string,
  ) {
    try {
      const getTodoDocumentByIdTask = await this.todoService.getToDoItemById(toDoId);
      return this.successTaskFactory(response, getTodoDocumentByIdTask);
    } catch (error) {
      return this.failureTaskFactory(response, error)
    }
  }

  @Patch('updateToDoItem/:id')
  public async updateToDoItem(
    @Res() response: Response,
    @Param('id') toDoId: string,
    @Body() ToDoItem: ToDo
  ) {
    try {
      const updateTask = await this.todoService.updateToDo(toDoId, ToDoItem);
      return this.successTaskFactory(response, updateTask)
    } catch (error) {
      return this.failureTaskFactory(response, error);
    }
  }



}
