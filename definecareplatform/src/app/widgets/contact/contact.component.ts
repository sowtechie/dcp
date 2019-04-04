import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit, OnChanges {
  @Input()
  contact;

  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    console.log('changes in contact are ', changes)
  }
  
  ngOnInit() {
    if (!this.contact || !this.contact.phNo) {
      this.contact = {
        phNo: 9866643424,
        emailId: 'default.info@dcp.com'
      };
    }
  }
}
