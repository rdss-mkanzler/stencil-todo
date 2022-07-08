import { Component, h, Listen, State } from '@stencil/core';

@Component({
    tag: 'todo-list',
    styleUrl: 'todo-list.css',
    shadow: true,
})
export class TodoList {
    @State() todos: string[] = [];

    componentWillLoad() {
        this.todos = ['TODO 1', 'TODO 2'];
    }

    @Listen('todoCreated')
    addTodo(event) {
        console.log('FROM LISTEN:', event.detail);
    }

    addTodo2(event) {
        console.log('FROM ELEMENT:', event.detail);
    }

    render() {
        return (
            <section>
                <h2>TODO List</h2>
                <ul>
                    {this.todos.map(todo => (
                        <todo-item todo={todo}></todo-item>
                    ))}
                    <todo-item-new onTodoCreated={event => this.addTodo2(event)}></todo-item-new>
                </ul>
            </section>
        );
    }
}
