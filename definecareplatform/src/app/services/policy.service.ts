import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class PolicyService {
    
    constructor(private httpClient: HttpClient){}
    
    getPolicyInfo(policyType) {
        return this.httpClient.get('http://localhost:8083/api/policy/getPolicyInfo?policyType=' + policyType);
    }
}