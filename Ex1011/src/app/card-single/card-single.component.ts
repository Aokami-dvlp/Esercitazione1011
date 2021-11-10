import { Funko } from './../models/funko';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card-single',
  templateUrl: './card-single.component.html',
  styleUrls: ['./card-single.component.scss']
})
export class CardSingleComponent implements OnInit {

@Input() funko!:Funko;
@Output() selectedFunko = new EventEmitter<Funko>();


  constructor() { }

  ngOnInit(): void {
  }

  selectFunko(funko: Funko) {
    this.selectedFunko.emit(funko);
  }

}
