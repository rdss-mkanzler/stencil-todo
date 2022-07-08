import { Component, h, State, Event, EventEmitter } from '@stencil/core';

@Component({
    tag: 'todo-item-new',
    styleUrl: 'todo-item-new.css',
    shadow: true,
})
export class TodoItem {
    @Event() todoCreated: EventEmitter<string>;

    @State() title: string;

    handleInput(event) {
        this.title = event.target.value;
    }

    handleSubmit(event) {
        event.preventDefault();
        if (this.isValid) {
            this.todoCreated.emit(this.title);
            this.title = '';
        }
    }

    isValid(text) {
        return text !== '';
    }

    render() {
        return (
            <li>
                <form onSubmit={event => this.handleSubmit(event)}>
                    <input value={this.title} onInput={event => this.handleInput(event)} />
                </form>
            </li>
        );
    }
}
