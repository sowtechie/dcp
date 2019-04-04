import { Component, OnInit, Output, EventEmitter, ChangeDetectorRef, Input } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Policy } from 'src/app/models/policy';

@Component({
  selector: 'app-policy',
  templateUrl: './policy.component.html',
  styleUrls: ['./policy.component.scss']
})
export class PolicyComponent implements OnInit {

  @Input()
  policy = new Policy();

  @Output()
  policyFromChildUpdated = new EventEmitter();

  policies = [
    'Gold',
    'Silver',
    'Bronze'
  ];
  policyForm: FormGroup;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {

    this.policyForm = this.formBuilder.group({
      selectedPolicy: []
    });

    this.policyForm.valueChanges.subscribe(changes => {
      this.policyFromChildUpdated.emit(changes);
    });
  }
}
