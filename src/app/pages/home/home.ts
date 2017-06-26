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
  @ViewChild('messageView') messageViewDiv:ElementRef;

  public themOrYou : boolean; 
  public you : fakeUser;
  public them : fakeUser;
  public messages : Array<Message>;
  public currentThemMessage: string;
  public currentYouMessage: string;
  public selectedDirective: string;

  constructor() {
    this.you = new fakeUser();
    this.them = new fakeUser();
    this.messages = new Array<Message>();
    this.them.Name = "";
    this.them.Avatar = "";
    this.you.Name = "";
    this.you.Avatar = "";
    this.currentThemMessage = "";
    this.currentYouMessage = "";
    this.selectedDirective = "";
  }

  addThemMessage(){
    if(this.currentThemMessage != ""){
      this.messages.push(new Message(this.currentThemMessage, this.them));
      this.currentThemMessage = "";
    }    
  }

  addYouMessage(){
    if(this.currentYouMessage != ""){
      this.messages.push(new Message(this.currentYouMessage, this.you));
      this.currentYouMessage = "";
    }    
  }

  submitThemMessage($event){
    $event.preventDefault();
    this.addThemMessage();
  }

  submitYouMessage($event){
    $event.preventDefault();
    this.addYouMessage();
  }

  iMessageClicked(){
    this.selectedDirective = "iMessage";
  }

  facebookClicked(){
    this.selectedDirective = "facebook";
  }

  quarterClicked(){
    this.messageViewDiv.nativeElement.className = 'scale25';
  }

  fiftyClicked(){
    this.messageViewDiv.nativeElement.className = 'scale50';
  }

  sixtyClicked(){
    this.messageViewDiv.nativeElement.className = 'scale60';
  }

  seventyClicked(){
    this.messageViewDiv.nativeElement.className = 'scale70';
  }

  eightyClicked(){
    this.messageViewDiv.nativeElement.className = 'scale80';
  }

  ninetyClicked(){
    this.messageViewDiv.nativeElement.className = 'scale90';
  }

  Originalclicked(){
    this.messageViewDiv.nativeElement.className = 'scaleOriginal';
  }

}