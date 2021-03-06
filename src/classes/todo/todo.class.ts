import shortid from 'shortid';

export class Todo {
    id: string;
    title: string;
    done: boolean;
    created: Date;

    constructor(title: string) {
        this.id = shortid.generate();
        this.title = title;
        this.done = false;
        this.created = new Date();
    }
}
