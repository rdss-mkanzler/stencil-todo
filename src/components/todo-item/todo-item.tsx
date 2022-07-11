import { Component, h, Prop, Event, EventEmitter, State, Watch } from '@stencil/core';
import { Todo } from '../../classes/todo/todo.class';

@Component({
    tag: 'todo-item',
    styleUrl: 'todo-item.scss',
    shadow: true,
})
export class TodoItem {
    @Event() todoStateChanged: EventEmitter<Todo>;
    @Event() todoDeleted: EventEmitter<Todo>;

    @Prop() todo: Todo;

    @State() className: string = 'todo-item';

    componentWillLoad() {
        this.watchTodoHandler(this.todo);
    }

    handleStateChange(event) {
        this.todoStateChanged.emit(this.todo);
    }

    handleTodoDeletion(event) {
        this.todoDeleted.emit(this.todo);
    }

    @Watch('todo')
    watchTodoHandler(newValue: Todo) {
        this.className = this.todoItemClass(newValue);
    }

    todoItemClass(todo: Todo) {
        let className = 'todo-item';
        className += todo.done ? ' is-done' : '';
        return className;
    }

    render() {
        return (
            <article class={this.className}>
                <div class="todo-state" onClick={event => this.handleStateChange(event)}>
                    <i class="check fa-solid fa-check"></i>
                </div>
                <div class="todo">{this.todo.title}</div>
                <div class="todo-actions">
                    <i class="action edit fa-solid fa-pen"></i>
                    <i class="action delete fa-solid fa-trash" onClick={event => this.handleTodoDeletion(event)}></i>
                </div>
            </article>
        );
    }
}
