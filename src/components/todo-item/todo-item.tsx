import { Component, h, Prop, Event, EventEmitter, State, Watch } from '@stencil/core';
import { Todo } from '../../classes/todo/todo.class';

@Component({
    tag: 'todo-item',
    styleUrl: 'todo-item.css',
    shadow: true,
})
export class TodoItem {
    @Event() todoChanged: EventEmitter<Todo>;

    @Prop() todo: Todo;

    @State() className: string = 'todo-item';

    handleStateChange(event) {
        let todo: Todo = { ...this.todo };
        todo.done = !todo.done;
        this.todoChanged.emit(todo);
    }

    @Watch('todo')
    watchTodoHandler(newValue: Todo, oldValue: Todo) {
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
                    <i class="action delete fa-solid fa-trash"></i>
                </div>
            </article>
        );
    }
}
