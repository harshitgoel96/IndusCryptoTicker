import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';


import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { ZebPayPage} from '../pages/zeb-pay/zeb-pay'
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HttpClientModule  } from '@angular/common/http';
import { RestProvider } from '../providers/rest/rest';
//import {GetKeysPipe} from '../pipes/get-keys/get-keys';
import { PipesModule } from '../pipes/pipes.module';
import { ZebPayProvider } from '../providers/zeb-pay/zeb-pay';
@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,ZebPayPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,PipesModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,ZebPayPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    RestProvider,
    ZebPayProvider
  ]
})
export class AppModule {}
