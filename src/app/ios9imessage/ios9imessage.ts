import { fakeUser } from './../models/fakeUser';
import { Message } from './../models/message';
import { Component, ViewChild, ViewChildren, QueryList, ElementRef } from '@angular/core';

@Component({
    selector: 'ios9imessage',
    templateUrl: "ios9imessage.html",
    styleUrls: ['ios9imessage.css'],
    inputs: ['messages', 'you', 'them']
})

export class ios9imessage {
    @ViewChildren('messagesContainer') populatedMessages: QueryList<any>;
    @ViewChild('content') contentDiv:ElementRef;

    public you:fakeUser;
    public them:fakeUser;
    public messages: Array<Message>;

    ngAfterViewInit(){
        this.populatedMessages.changes.subscribe(t => {
            this.scrollToBottom();
        });
    }

    scrollToBottom(){
        setTimeout(() => {
        this.contentDiv.nativeElement.scrollTop = this.contentDiv.nativeElement.scrollHeight;
        }, 1);
    }
}