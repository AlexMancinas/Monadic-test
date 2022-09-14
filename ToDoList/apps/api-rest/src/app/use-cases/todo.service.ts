import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CollectionTaskResponse, TaskClassBind, TaskResponse } from '@onboarding/domain';
import { Model } from 'mongoose';
import { ToDo, ToDoDocument } from '../domain/schemas/todo.schema';


@Injectable()
export class ToDoService {
  constructor(
    @InjectModel(ToDo.name) private readonly ToDo: Model<ToDoDocument>
  ) { }
  public async createNewTodo(Todo: ToDo): TaskResponse<TaskClassBind<ToDo>> {
    const newToDo = new this.ToDo(Todo);
    return newToDo.save();
  }

  public async deleteToDoById(id: string): TaskResponse<TaskClassBind<ToDo>> {
    return this.ToDo.findByIdAndDelete(id);
  }

  public async getToDoList(): CollectionTaskResponse<TaskClassBind<ToDo>> {
    return this.ToDo.find().exec();
  }

  public async getToDoItemById(todoId: string): TaskResponse<TaskClassBind<ToDo>> {
    return this.ToDo.findById(todoId).exec();
  }

  public async updateToDo(todoId: string, ToDo: ToDo): TaskResponse<TaskClassBind<ToDo>> {
    return this.ToDo.findByIdAndUpdate(todoId, ToDo);
  }


}
