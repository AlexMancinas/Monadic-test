import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ToDoService } from './use-cases/todo.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ToDo, TodoSchema } from './domain/schemas/todo.schema';
const uri = "mongodb+srv://tortilleromongodb:hYxhJnk3IL5cwFOw@cluster0.6nmde.mongodb.net/node-mgdb?retryWrites=true&w=majority";
@Module({
  imports: [
    MongooseModule.forRoot(uri),
    MongooseModule.forFeature([{ name: ToDo.name, schema: TodoSchema, collection: 'todos' }])
  ],
  controllers: [AppController],
  providers: [ToDoService],
})
export class AppModule { }
