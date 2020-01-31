import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientComponent } from './patient.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';


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
