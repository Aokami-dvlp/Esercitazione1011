import { Component, OnInit, Input } from '@angular/core';
import { Funko } from '../models/funko';

@Component({
  selector: 'app-card-detail',
  templateUrl: './card-detail.component.html',
  styleUrls: ['./card-detail.component.scss']
})
export class CardDetailComponent implements OnInit {

@Input() funko?: Funko;

  constructor() { }

  ngOnInit(): void {
  }

}
