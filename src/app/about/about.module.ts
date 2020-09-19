import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ButtonsModule, InputsModule, TableModule, IconsModule, ModalModule } from 'angular-bootstrap-md';
import { SharedModule } from '../shared/shared.module';
import { AboutComponent } from './about.component';

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
  ],
  declarations: [AboutComponent],
  exports: [AboutComponent],
})
export class AboutModule { }
