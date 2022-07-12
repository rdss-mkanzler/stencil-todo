import { Component, h, Listen, State, Watch } from '@stencil/core';
import { Todo } from '../../classes/todo/todo.class';

@Component({
    tag: 'todo-list',
    styleUrl: 'todo-list.scss',
    shadow: true,
})
export class TodoList {
    @State() todos: Todo[] = [];

    componentWillLoad() {
        let todos = window.localStorage.getItem('todos');
        if (todos) {
            this.todos = JSON.parse(todos);
        }
    }

    @Watch('todos')
    watchTodosHandler(newValue: Todo[]) {
        window.localStorage.setItem('todos', JSON.stringify(newValue));
    }

    @Listen('todoCreated')
    addTodo(event) {
        this.todos = [...this.todos, event.detail];
    }

    @Listen('todoStateChanged')
    changeTodo(event) {
        let todos = [...this.todos];
        let todo = todos.find(item => item.id === event.detail.id);
        if (todo) {
            todo = { ...todo, done: !todo.done };

            todos = this.todos.filter(item => item.id !== todo.id);
            todos.push(todo);

            todos.sort((a, b) => {
                let dateA = new Date(a.created);
                let dateB = new Date(b.created);
                return dateA.getTime() - dateB.getTime();
            });

            this.todos = [...todos];
        }
    }

    @Listen('todoDeleted')
    deleteTodo(event) {
        this.todos = [...this.todos.filter(item => item.id !== event.detail.id)];
    }

    /*
    addTodo2(event) {
        console.log('FROM ELEMENT:', event.detail);
    }
    */

    render() {
        return (
            <section class="todo-list-container">
                <todo-list-title></todo-list-title>
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
