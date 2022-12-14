import React from 'react';
import { Todo } from '../models/Todo';
import TodoListItem from './TodoListItem';

const TodoList = () => {

    const todos: Todo[] = [
        { id: 1, title: 'Ir ao supermercado', done: true},
        { id: 2, title: 'Ir a academia', done: false}
    ];

    return(
        <table className='uk-table'>
            <caption>To-do List</caption>
            <thead>
                <tr>
                    <th>#</th>
                    <th>To-do</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {todos?.map(todo => (<TodoListItem key={todo.id} todo={todo}></TodoListItem>))}
            </tbody>
        </table>
    );
}

export default TodoList;