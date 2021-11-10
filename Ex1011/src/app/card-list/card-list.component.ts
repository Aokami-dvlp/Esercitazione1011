import { Component, OnInit } from '@angular/core';
import { FUNKOS } from '../models/funko-mock';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss']
})
export class CardListComponent implements OnInit {

funkos = FUNKOS;

  constructor() { }

  ngOnInit(): void {
  }

}
