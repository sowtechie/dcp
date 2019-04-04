import { Component } from '@angular/core';

import { IPerson } from './models/types/IPerson';
import { IPhone } from './models/types/IPhone';
import { IPhone5 } from './models/IPhone5';
import { IPhone8 } from './models/IPhone8';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // person: IPerson;
  // phone: IPhone;

   title = 'DefineCarePlatform';

  // selectPhone(type) {
  //   if(type == 5) {
  //     this.phone = new IPhone5();

  //   }
  //   if(type == 8) {
  //     this.phone = new IPhone8();
  //   }
  //   console.log('selected ', type)
  // }

  // callPhone() {
  //   this.phone.calling();
  // }
}
