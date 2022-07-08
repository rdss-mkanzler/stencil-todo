import { Component, h, Prop, Host } from '@stencil/core';

@Component({
    tag: 'todo-item',
    styleUrl: 'todo-item.css',
    shadow: true,
})
export class TodoItem {
    @Prop() todo: string;

    render() {
        return (
            <Host class={'is-done'}>
                <div class="todo-state"></div>
                <div class="todo">{this.todo}</div>
            </Host>
        );
    }
}
