import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import { TodoFormComponent } from './presentation/components/todo-form/todo-form.component';
import { TodoListComponent } from './presentation/components/todo-list/todo-list.component';
import { TodoComponent } from './presentation/components/todo/todo.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './application/material.module';
import { HttpClientModule } from '@angular/common/http';
import { StatusPipe } from './infrastructure/pipes/status.pipe';
import { FilterListPipe } from './infrastructure/pipes/filter-list.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    TodoFormComponent,
    TodoListComponent,
    StatusPipe,
    FilterListPipe
  ],
  imports: [
    BrowserModule, 
    AppRoutingModule, 
    FormsModule, 
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
