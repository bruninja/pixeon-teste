import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import * as firebase from 'firebase';
import { AngularFireModule } from 'angularfire2';


export const firebaseConfig = {
  apiKey: "AIzaSyBBEGyIqwgIafVz3l8XC1XjcajBGTfvkZI",
    authDomain: "pixeon-teste-161707.firebaseapp.com",
    databaseURL: "https://pixeon-teste-161707.firebaseio.com",
    storageBucket: "pixeon-teste-161707.appspot.com"
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
