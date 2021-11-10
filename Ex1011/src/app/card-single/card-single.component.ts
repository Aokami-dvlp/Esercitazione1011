import { Funko } from './../models/funko';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-single',
  templateUrl: './card-single.component.html',
  styleUrls: ['./card-single.component.scss']
})
export class CardSingleComponent implements OnInit {

@Input() funko?:Funko;

  constructor() { }

  ngOnInit(): void {
  }

}
