import { map } from "rxjs";
import { Todo } from "../../models/todo";
export type StringedObject<T> = {
    [P in keyof T]: string;
}

export const mapTodoCollection = (todoCollectionSnapshot: Array<StringedObject<Todo>>) => todoCollectionSnapshot.map(SingleTodoDataMapper);

export const SingleTodoDataMapper = (todoSnapshot: StringedObject<Todo>) => {
    const data = todoSnapshot as unknown as StringedObject<Todo>;
    return SingleTodoMapper(data);
}

const SingleTodoMapper = (singleTodo: StringedObject<Todo>): Todo => ({
    ...singleTodo,
    createTime: +singleTodo.createTime,
    done: singleTodo.done.toLowerCase() === 'true',
});

export const mapCollection = () => map<Array<StringedObject<Todo>>, Array<Todo>>(mapTodoCollection);