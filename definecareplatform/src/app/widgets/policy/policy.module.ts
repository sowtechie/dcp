import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PolicyComponent } from './policy.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatOptionModule } from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';
import {MatDividerModule} from '@angular/material/divider';

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
