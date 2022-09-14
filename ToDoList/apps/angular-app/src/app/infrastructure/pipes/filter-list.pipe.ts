import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from '../../models/todo';
type TFilter = "ALL" | "DONE" | "TODO";
export const AvailableFilters = [
  { name: "All", filter: "ALL" },
  { name: "Done", filter: "DONE" },
  { name: "Todo", filter: "TODO" },
]
export type TAvailableFilters = typeof AvailableFilters;
@Pipe({
  name: 'filterList'
})
export class FilterListPipe implements PipeTransform {

  transform(todoList: Array<Todo>, filter: TFilter): Array<Todo> {
    return this.matchFilterList(todoList, filter);
  }

  private matchFilterList(todoList: Array<Todo>, filter: TFilter): Array<Todo> {
    switch (filter) {
      case "DONE":
        return todoList.filter((item) => item.done);
      case "TODO":
        return todoList.filter((item) => !item.done);
      default:
        return todoList;
    }
  }


}
