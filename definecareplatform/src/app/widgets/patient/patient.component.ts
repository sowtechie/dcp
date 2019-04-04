import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Person } from 'src/app/models/person';
import { IPerson } from 'src/app/models/types/IPerson';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.scss']
})
export class PatientComponent implements OnInit {
  @Input()
  patient: IPerson = new Person();

  @Output()
  patientFromChildUpdated = new EventEmitter();

  patientForm: FormGroup;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.patientForm = this.formBuilder.group({
      name: [''],
      age: [],
    });

    this.patientForm.valueChanges.subscribe(changes => {
      this.patientFromChildUpdated.emit(changes);
    });
  }

  reversString(a) {
    let b=a.split("").reverse().join("");
    console.log("my name is b",b)
  };

}
