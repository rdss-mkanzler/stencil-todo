import { Component, h, State, Watch } from '@stencil/core';

@Component({
    tag: 'todo-list-title',
    styleUrl: 'todo-list-title.scss',
    shadow: true,
})
export class TodoListTitle {
    @State() todoListTitle: string = 'TODO List';
    @State() todoListTitleEdit: Boolean = false;
    todoListTitleInput: HTMLInputElement;

    componentWillLoad() {
        let todoListTitle = window.localStorage.getItem('todoListTitle');
        if (todoListTitle) {
            this.todoListTitle = todoListTitle;
        } else {
            this.todoListTitle = 'TODO List #1';
        }
    }

    @Watch('todoListTitle')
    watchTodoListTitleHandler(newValue: string) {
        window.localStorage.setItem('todoListTitle', newValue);
    }

    @Watch('todoListTitleEdit')
    watchTodoListTitleEditHandler(newValue: Boolean) {
        if (newValue) {
            this.todoListTitleInput.focus();
        }
    }

    toggleTodoListTitleEditState(event) {
        event.preventDefault();

        this.todoListTitleEdit = !this.todoListTitleEdit;
    }

    handleTodoListTitleInput(event) {
        this.todoListTitle = event.target.value;
    }

    render() {
        return (
            <h2 class={this.todoListTitleEdit ? 'todo-list-title editable' : 'todo-list-title'}>
                <input
                    class="title-input"
                    ref={el => (this.todoListTitleInput = el as HTMLInputElement)}
                    value={this.todoListTitle}
                    onInput={event => this.handleTodoListTitleInput(event)}
                />
                <span class="title-static">{this.todoListTitle}</span>{' '}
                <button class="title-edit-button" onClick={event => this.toggleTodoListTitleEditState(event)}>
                    {this.todoListTitleEdit ? <i class="fa-solid fa-arrow-right"></i> : <i class="fa-solid fa-pen"></i>}
                </button>
            </h2>
        );
    }
}
