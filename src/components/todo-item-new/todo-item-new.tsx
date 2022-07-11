import { Component, h, State, Event, EventEmitter } from '@stencil/core';
import { Todo } from '../../classes/todo/todo.class';

@Component({
    tag: 'todo-item-new',
    styleUrl: 'todo-item-new.css',
    shadow: true,
})
export class TodoItem {
    @Event() todoCreated: EventEmitter<Todo>;

    @State() title: string;

    handleInput(event) {
        this.title = event.target.value;
    }

    handleSubmit(event) {
        event.preventDefault();
        if (this.isValid) {
            let todo: Todo = new Todo(this.title);
            this.todoCreated.emit(todo);

            this.title = '';
        }
    }

    isValid(text) {
        return text !== '';
    }

    render() {
        return (
            <article>
                <form onSubmit={event => this.handleSubmit(event)}>
                    <input value={this.title} onInput={event => this.handleInput(event)} />
                </form>
            </article>
        );
    }
}
