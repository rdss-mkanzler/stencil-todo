import { Component, h, Listen, State } from '@stencil/core';

@Component({
    tag: 'todo-list',
    styleUrl: 'todo-list.css',
    shadow: true,
})
export class TodoList {
    @State() todos: string[] = [];

    componentWillLoad() {}

    @Listen('todoCreated')
    addTodo(event) {
        this.todos = [...this.todos, event.detail];
    }

    /*
    addTodo2(event) {
        console.log('FROM ELEMENT:', event.detail);
    }
    */

    render() {
        return (
            <section>
                <h2>TODO List</h2>
                <ul>
                    {/*<todo-item-new onTodoCreated={event => this.addTodo2(event)}></todo-item-new>*/}
                    <todo-item-new />

                    {this.todos.map(todo => (
                        <todo-item todo={todo}></todo-item>
                    ))}
                </ul>
            </section>
        );
    }
}
