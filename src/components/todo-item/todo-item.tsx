import { Component, h, Prop } from '@stencil/core';

@Component({
    tag: 'todo-item',
    styleUrl: 'todo-item.css',
    shadow: true,
})
export class TodoItem {
    @Prop() todo: string;

    render() {
        return <li>{this.todo}</li>;
    }
}
