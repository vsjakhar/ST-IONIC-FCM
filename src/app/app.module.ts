import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { FcmService } from './services/fcm.service';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { Firebase } from '@ionic-native/firebase/ngx';

const config = {
    apiKey: "AIzaSyB--pe7WcCuQX_XltBOa88raGa1dtoB3Zo",
    authDomain: "ionic-1fdd9.firebaseapp.com",
    databaseURL: "https://ionic-1fdd9.firebaseio.com",
    projectId: "ionic-1fdd9",
    storageBucket: "ionic-1fdd9.appspot.com",
    messagingSenderId: "210403001692"
  };

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    // IonicStorageModule.forRoot(),
    AngularFireModule.initializeApp(config),
    AngularFirestoreModule,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    FcmService,
    Firebase,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
