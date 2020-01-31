import { Component, OnInit } from '@angular/core';
import { IPatient } from 'src/app/models/types/IPatient';
@Component({
  selector: 'app-find-doctor',
  templateUrl: './find-doctor.component.html',
  styleUrls: ['./find-doctor.component.scss']
})
export class FindDoctorComponent implements OnInit {
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
