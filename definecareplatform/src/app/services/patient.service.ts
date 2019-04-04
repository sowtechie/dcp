import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Headers, RequestOptions } from '@angular/http';

@Injectable()
export class PatientService {

    constructor(private httpClient: HttpClient) { }

    submitPatientData(patientData) {
        // const headers = new HttpHeaders();
        // headers.append('Accept', 'application/json');
        // const httpOptions = {
        //     headers: new HttpHeaders({
        //       'Content-Type':  'application/x-www-form-urlencoded'
        //     })
        //   };
        return this.httpClient.post('http://localhost:8081/api/patient/submitForm', patientData);
    }

}