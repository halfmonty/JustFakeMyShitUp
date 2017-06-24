import { Message } from './../../models/message';
import { fakeUser } from './../../models/fakeUser';
import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class HomeComponent {
  @ViewChild('content') contentDiv:ElementRef;

  public themOrYou : boolean; 
  public you : fakeUser;
  public them : fakeUser;
  public messages : Array<Message>;

  constructor() {
    this.you = new fakeUser();
    this.them = new fakeUser();
    this.messages = new Array<Message>();
    this.them.Name = "test";
  }

  addMessage(message: string){
    if(this.themOrYou){
      this.messages.push(new Message(message, this.you));
      //this.scrollToBottom();
    }else{
      this.messages.push(new Message(message, this.them));
      //this.scrollToBottom();
    }    
  }

  log(thing: any){
    console.log(thing);
  }

  ngAfterViewInit(){
    //this.scrollToBottom();
  }

  scrollToBottom(){
    setTimeout(() => {
      this.contentDiv.nativeElement.scrollTop = this.contentDiv.nativeElement.scrollHeight;
    }, 1);    
  }


}