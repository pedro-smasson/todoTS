import React from 'react';
import { Todo } from '../models/Todo';

const TodoList = () => {

    const todos: Todo[] = [];

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
                {
                    todos?.map(todo => (<div key={todo.id}> {todo.title} </div>))
                }
            </tbody>
        </table>
    );
}

export default TodoList;