import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewPatientformComponent } from './view-patientform.component';
import { RouterModule, Routes } from '@angular/router';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
let routes: Routes = [
  {
    path: '',
    component: ViewPatientformComponent
  }
];
@NgModule({
  declarations: [ViewPatientformComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    
    
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
 
  ]
})
export class ViewPatientformModule { }
