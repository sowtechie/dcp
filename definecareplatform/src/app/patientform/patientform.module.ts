import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientformComponent } from './patientform.component';
import { RouterModule } from '@angular/router';
import { MatInputModule, MatButtonModule, MatToolbarModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { PatientModule } from '../widgets/patient/patient.module';
import { PolicyModule } from '../widgets/policy/policy.module';
import { ContactModule } from '../widgets/contact/contact.module';

let routes = [
  {
    path: '',
    component: PatientformComponent
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
