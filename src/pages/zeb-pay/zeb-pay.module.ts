import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ZebPayPage } from './zeb-pay';

@NgModule({
  declarations: [
    ZebPayPage,
  ],
  imports: [
    IonicPageModule.forChild(ZebPayPage),
  ],
})
export class ZebPayPageModule {}
