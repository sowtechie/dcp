import { Component, OnInit } from '@angular/core';
import { IPatient } from 'src/app/models/types/IPatient';

@Component({
  selector: 'app-view-patientform',
  templateUrl: './view-patientform.component.html',
  styleUrls: ['./view-patientform.component.scss']
})
export class ViewPatientformComponent implements OnInit {
  patientId;
  patient: IPatient;
  constructor() { }

  ngOnInit() {

  }
  searchPatient() {
    console.log('show me this.patientId', this.patientId)
    this.patient = {
      id: 'ghjkmjnbvcdxsdfghjjjjj',
      name: 'NSK'
    };
  }
}