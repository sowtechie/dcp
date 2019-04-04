import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PolicyComponent } from './policy.component';
import { MatOptionModule, MatSelectModule, MatToolbarModule, MatDividerModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [PolicyComponent],
  exports: [PolicyComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,

    MatToolbarModule,
    MatOptionModule,
    MatSelectModule,
    MatDividerModule
  ]
})
export class PolicyModule { }
