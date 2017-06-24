import { fakeUser } from './fakeUser';
export class Message{
    User: fakeUser;
    Text: string;

    constructor(text: string, user: fakeUser){
        this.User = user;
        this.Text = text;
    }
}