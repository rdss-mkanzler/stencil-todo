import { Component, h, Listen, State } from '@stencil/core';
import { Todo } from '../../classes/todo/todo.class';

@Component({
    tag: 'todo-list',
    styleUrl: 'todo-list.css',
    shadow: true,
})
export class TodoList {
    @State() todos: Todo[] = [];

    componentWillLoad() {}

    @Listen('todoCreated')
    addTodo(event) {
        this.todos = [...this.todos, event.detail];
    }

    @Listen('todoChanged')
    changeTodo(event) {
        let todos = [...this.todos];
        let todo = todos.find(item => item.title == event.detail.title);
        if (todo) {
            todo = { ...todo, done: event.detail.done };

            todos = this.todos.filter(item => item.title != todo.title);
            todos.push(todo);

            todos.sort((a, b) => {
                let dateA = new Date(a.created);
                let dateB = new Date(b.created);
                return dateA.getTime() - dateB.getTime();
            });

            this.todos = [...todos];
        }
    }

    /*
    addTodo2(event) {
        console.log('FROM ELEMENT:', event.detail);
    }
    */

    render() {
        return (
            <section class="todo-list-container">
                <h2 class="todo-list-title">
                    TODO List{' '}
                    <button class="edit">
                        <i class="fa-solid fa-pen"></i>
                    </button>
                </h2>
                <div class="todo-list">
                    {/*<todo-item-new onTodoCreated={event => this.addTodo2(event)}></todo-item-new>*/}
                    <todo-item-new />

                    {this.todos.map(todo => (
                        <todo-item todo={todo}></todo-item>
                    ))}
                </div>
            </section>
        );
    }
}
