import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CtPage } from './ct';

@NgModule({
  declarations: [
    CtPage,
  ],
  imports: [
    IonicPageModule.forChild(CtPage),
  ],
})
export class CtPageModule {}
