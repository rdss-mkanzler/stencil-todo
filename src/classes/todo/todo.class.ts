export class Todo {
    id: string;
    title: string;
    done: boolean;
    created: Date;

    constructor(title: string) {
        this.title = title;
        this.done = false;
        this.created = new Date();
    }
}
