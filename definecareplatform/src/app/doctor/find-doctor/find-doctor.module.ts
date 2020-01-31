import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { FindDoctorComponent } from './find-doctor.component';

@NgModule({
  declarations: [FindDoctorComponent],
  imports: [
    CommonModule,
    FormsModule,
    
    
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    
 
  ]
})
export class FindDoctorModule { }
