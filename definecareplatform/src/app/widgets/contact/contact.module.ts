import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact.component';
import { MatToolbarModule } from '@angular/material';

@NgModule({
  declarations: [ContactComponent],
  exports: [ContactComponent],
  imports: [
    CommonModule,

    MatToolbarModule
  ]
})
export class ContactModule { }
