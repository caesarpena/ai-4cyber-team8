import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ButtonsModule, InputsModule, TableModule, IconsModule, ModalModule } from 'angular-bootstrap-md';
import { SharedModule } from '../shared/shared.module';
import { ModellingComponent } from './modelling.component';
import { AccordionModule } from 'ngx-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ModalModule,
    FormsModule,
    ButtonsModule,
    InputsModule,
    IconsModule,
    TableModule,
    AccordionModule.forRoot(),
  ],
  declarations: [ModellingComponent],
  exports: [ModellingComponent],
})
export class ModellingModule { }
