import { Component, h, Listen, State, Watch } from '@stencil/core';
import { Todo } from '../../classes/todo/todo.class';

@Component({
    tag: 'todo-list',
    styleUrl: 'todo-list.scss',
    shadow: true,
})
export class TodoList {
    @State() todoListTitle: string = 'TODO List';
    @State() todoListTitleEdit: Boolean = false;
    todoListTitleInput: HTMLInputElement;

    @State() todos: Todo[] = [];

    componentWillLoad() {
        let todos = window.localStorage.getItem('todos');
        if (todos) {
            this.todos = JSON.parse(todos);
        }

        let todoListTitle = window.localStorage.getItem('todoListTitle');
        if (todoListTitle) {
            this.todoListTitle = todoListTitle;
        } else {
            this.todoListTitle = 'TODO List #1';
        }
    }

    @Watch('todos')
    watchTodosHandler(newValue: Todo[]) {
        window.localStorage.setItem('todos', JSON.stringify(newValue));
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

    toggleTodoListTitleEditState(event) {
        event.preventDefault();

        this.todoListTitleEdit = !this.todoListTitleEdit;
    }

    handleTodoListTitleInput(event) {
        this.todoListTitle = event.target.value;
    }

    /*
    addTodo2(event) {
        console.log('FROM ELEMENT:', event.detail);
    }
    */

    render() {
        return (
            <section class="todo-list-container">
                <h2 class={this.todoListTitleEdit ? 'todo-list-title editable' : 'todo-list-title'}>
                    <input
                        class="title-input"
                        ref={el => (this.todoListTitleInput = el as HTMLInputElement)}
                        value={this.todoListTitle}
                        onInput={event => this.handleTodoListTitleInput(event)}
                    />
                    <span class="title-static">{this.todoListTitle}</span>{' '}
                    <button class="edit" onClick={event => this.toggleTodoListTitleEditState(event)}>
                        {this.todoListTitleEdit ? <i class="fa-solid fa-arrow-right"></i> : <i class="fa-solid fa-pen"></i>}
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
