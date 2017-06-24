import { fakeUser } from './../models/fakeUser';
import { Message } from './../models/message';
import { Component } from '@angular/core';

@Component({
    selector: 'ios9imessage',
    templateUrl: "ios9imessage.html",
    styleUrls: ['ios9imessage.css'],
    inputs: ['messages', 'you', 'them']
})

export class ios9imessage {
    public you:fakeUser;
    public them:fakeUser;
    public messages: Array<Message>;
}