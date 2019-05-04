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
  title = 'DefineCarePlatform';
}
