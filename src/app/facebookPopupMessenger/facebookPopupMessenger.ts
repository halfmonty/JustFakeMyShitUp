import { fakeUser } from './../models/fakeUser';
import { Message } from './../models/message';
import { Component, ViewChild, ViewChildren, QueryList, ElementRef } from '@angular/core';
import { DomSanitizer, SafeResourceUrl, SafeUrl} from '@angular/platform-browser';

@Component({
    selector: 'facebookPopupMessenger',
    templateUrl: "facebookPopupMessenger.html",
    styleUrls: ['facebookPopupMessenger.css'],
    inputs: ['messages', 'you', 'them']
})

export class facebookPopupMessenger {
    @ViewChildren('messagesContainer') populatedMessages: QueryList<any>;
    @ViewChild('content') contentDiv:ElementRef;

    public you:fakeUser;
    public them:fakeUser;
    public messages: Array<Message>;
    public photoUrl: any;
    public photoStyleString: string;

    constructor(private sanitizer: DomSanitizer){
        this.them = new fakeUser();
        this.photoUrl = sanitizer.bypassSecurityTrustUrl(this.them.Avatar);
        this.photoStyleString = "background-image:url('" + this.photoUrl + "')";
    }

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

    getPhotoUrl(){
        this.sanitizer.bypassSecurityTrustUrl(this.them.Avatar);
    }
}