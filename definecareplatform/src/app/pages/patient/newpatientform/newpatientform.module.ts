import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientformComponent } from './newpatientform.component';
import { RouterModule } from '@angular/router';

import { PatientModule } from 'src/app/widgets/patient/patient.module';
import { PolicyModule } from 'src/app/widgets/policy/policy.module';
import { ContactModule } from 'src/app/widgets/contact/contact.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';

let routes = [
  {
    path: '',
    component:  PatientformComponent
  }
];

@NgModule({
  declarations: [PatientformComponent],
  exports: [PatientformComponent],
  imports: [
    CommonModule,


    RouterModule.forChild(routes),

    MatToolbarModule,
    MatButtonModule,

    PatientModule,
    PolicyModule,
    ContactModule
  ]
})
export class PatientformModule { }
