import { facebookPopupMessenger } from './facebookPopupMessenger/facebookPopupMessenger';
import { ios9imessage } from './ios9imessage/ios9imessage';
import { AboutComponent } from './pages/about/about';
import { HomeComponent } from './pages/home/home';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: '**', component: HomeComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ios9imessage,
    facebookPopupMessenger
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
