import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { PatientService } from 'src/app/services/patient.service';
import { PolicyService } from 'src/app/services/policy.service';


@Component({
  selector: 'app-patientform',
  templateUrl: './newpatientform.component.html',
  styleUrls: ['./newpatientform.component.scss']
})
export class PatientformComponent implements OnInit {

  patientFormData = {};

  contact = {};
  selectedPolicy;

  ads = [
    {
      shortText: 'View medicare basics',
      link: 'https://www.bcbstx.com/medicare/medicare-basics'
    },
    {
      shortText: 'Learn when to enroll',
      link: 'https://retailweb.hcsc.net/retailshoppingcart/TX/census?plantype=medicare'
    }
  ]

  constructor(private patientService: PatientService, private policyService: PolicyService) { }

  ngOnInit() {
  }

  personUpdated(patientChanges) {
    this.patientFormData['patient'] = patientChanges;
    console.log('from parent form, changes are -> ', this.patientFormData)
  }

  policyUpdated(policyChanges) {
    this.policyService.getPolicyInfo(policyChanges.selectedPolicy).subscribe(response => {
      this.selectedPolicy = response['policy'];
      this.contact = this.selectedPolicy.contact

      this.patientFormData['selectedPolicy'] = this.selectedPolicy._id;
    });
    console.log('from parent form, changes are -> ', this.patientFormData)
  }

  // healthUpdated(healthChanges) {
  //   this.patientFormData['health'] = healthChanges;
  //   console.log('from parent form, changes are -> ', this.patientFormData)
  // }

  submitForm() {
    console.log('Im submitting the form with this data -> ', this.patientFormData)
    // const formData: FormData = new FormData();
    // formData.append('patient', JSON.stringify(this.patientFormData));
    this.patientService.submitPatientData(this.patientFormData).subscribe(backendResponse => {
      console.log('patient submit response is', backendResponse);
    })
  }
}
