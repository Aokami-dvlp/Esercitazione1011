import { Component, OnInit } from '@angular/core';
import { FUNKOS } from '../models/funko-mock';
import { Funko } from '../models/funko';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss']
})
export class CardListComponent implements OnInit {

funkos = FUNKOS;
selectedFunko?: Funko;

  constructor() { }

  ngOnInit(): void {
  }

  selectFunko(funko: Funko) {
    this.selectedFunko = funko;
    }

}
