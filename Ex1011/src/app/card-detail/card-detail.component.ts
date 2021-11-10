import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Funko } from '../models/funko';

@Component({
  selector: 'app-card-detail',
  templateUrl: './card-detail.component.html',
  styleUrls: ['./card-detail.component.scss']
})
export class CardDetailComponent implements OnInit {

@Input() funko?: Funko;
@Output() closedDetails = new EventEmitter();


  constructor() { }

  ngOnInit(): void {
  }

  closeDetails() {
    this.closedDetails.emit();
  }
}
