import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from '@angular/router';
import { DoctorComponent } from './doctor.component';
import { FindDoctorComponent } from './find-doctor/find-doctor.component';
import { FindHospitalComponent } from './find-hospital/find-hospital.component';
import { MatButtonModule } from '@angular/material/button';

const routes: Routes = [
  {
    path: '',
    component: DoctorComponent,

  children: [     {

    path: 'find-doctor',
    
    loadChildren: './find-doctor/find-doctor.module#FindDoctorModule'
  },
  {
    path: 'find-hospital',
    loadChildren: './find-hospital/find-hospital.module#FindHospitalModule'
  }
]
},

  ]

@NgModule({
  declarations: [DoctorComponent, FindDoctorComponent, FindHospitalComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatButtonModule
  ],
  exports:[DoctorComponent]
})
export class DoctorModule { }
