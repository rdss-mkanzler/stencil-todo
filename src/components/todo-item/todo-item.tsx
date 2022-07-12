import { Component, h, Prop, Event, EventEmitter, State } from '@stencil/core';
import { Todo } from '../../classes/todo/todo.class';

@Component({
    tag: 'todo-item',
    styleUrl: 'todo-item.scss',
    shadow: true,
})
export class TodoItem {
    @Event() todoStateChanged: EventEmitter<Todo>;
    @Event() todoTitleChanged: EventEmitter<Todo>;
    @Event() todoDeleted: EventEmitter<Todo>;

    @Prop() todo: Todo;

    @State() className: string = 'todo-item';

    @State() todoTitle: string;
    @State() todoTitleEdit: Boolean = false;

    componentWillLoad() {
        this.todoTitle = this.todo.title;
    }

    /*
        Like VUE emits
    */
    handleStateChange() {
        this.todoStateChanged.emit(this.todo);
    }

    handleTodoTitleChange() {
        this.todo.title = this.todoTitle;
        this.todoTitleChanged.emit(this.todo);
    }

    handleTodoDeletion() {
        this.todoDeleted.emit(this.todo);
    }

    /*
        Like VUE computed vars
    */
    todoItemClass() {
        let className = 'todo-item';
        className += this.todo.done ? ' is-done' : '';
        className += this.todoTitleEdit ? ' editable' : '';

        return className;
    }

    /*
        Like VUE methods
    */
    toggleTodoTitleEditState() {
        if (this.todoTitleEdit) {
            this.handleTodoTitleChange();
        }
        this.todoTitleEdit = !this.todoTitleEdit;
    }

    handleTodoTitleInput(event) {
        this.todoTitle = event.target.value;
    }

    render() {
        return (
            <article class={this.todoItemClass()}>
                <div class="todo-state" onClick={() => this.handleStateChange()}>
                    <i class="check fa-solid fa-check"></i>
                </div>
                <div class={this.todoTitleEdit ? 'todo editable' : 'todo'}>
                    <input class="todo-input" value={this.todoTitle} onInput={event => this.handleTodoTitleInput(event)} />
                    <span class="todo-static">{this.todoTitle}</span>
                </div>
                <div class="todo-actions">
                    <i class={this.todoTitleEdit ? 'action edit fa-solid fa-arrow-right' : 'action edit fa-solid fa-pen'} onClick={() => this.toggleTodoTitleEditState()}></i>
                    <i class="action delete fa-solid fa-trash" onClick={() => this.handleTodoDeletion()}></i>
                </div>
            </article>
        );
    }
}
