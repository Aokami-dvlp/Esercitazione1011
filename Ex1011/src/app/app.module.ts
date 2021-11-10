import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CardListComponent } from './card-list/card-list.component';
import { CardSingleComponent } from './card-single/card-single.component';

@NgModule({
  declarations: [
    AppComponent,
    CardListComponent,
    CardSingleComponent
  ],
  imports: [
    BrowserModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
