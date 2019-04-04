import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientComponent } from './patient.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatInputModule, MatButtonModule, MatToolbarModule } from '@angular/material';

@NgModule({
  declarations: [PatientComponent],
  exports: [PatientComponent],
  imports: [
    CommonModule,

    
    FormsModule,
    ReactiveFormsModule,

    
    MatInputModule,
    MatButtonModule,
    MatToolbarModule
  ]
})
export class PatientModule { }
