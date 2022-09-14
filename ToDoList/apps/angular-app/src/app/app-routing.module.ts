import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoFormComponent } from './presentation/components/todo-form/todo-form.component';
import { TodoListComponent } from './presentation/components/todo-list/todo-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/list', pathMatch: 'full' },
  { path: 'add', component: TodoFormComponent },
  { path: 'update/:todoId', component: TodoFormComponent },
  { path: 'list', component: TodoListComponent },
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
