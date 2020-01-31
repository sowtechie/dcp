import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientComponent } from './patient.component';
import { RouterModule, Routes } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';



const routes: Routes = [
  {
    path: '',
    component: PatientComponent,
    children: [
      {

        path: 'newpatientform',
        loadChildren: './newpatientform/newpatientform.module#PatientformModule'
      },
      {
        path: 'view-patientform',
        loadChildren: './view-patientform/view-patientform.module#ViewPatientformModule'
      }
    ]
  },
  ]

@NgModule({
  declarations: [PatientComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    RouterModule.forChild(routes)
  ]
})
export class PatientModule { }
