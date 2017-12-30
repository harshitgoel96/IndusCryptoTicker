import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
//import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import {ZebPayPage} from '../zeb-pay/zeb-pay'

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = ZebPayPage;
  tab3Root = AboutPage;

  constructor() {

  }
}
