import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { DatasetShellComponent } from './dataset-shell.component';
import { AzSecureModule } from './azsecure/azsecure.module';
import { PhishTankModule } from './phishtank/phishtank.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    AzSecureModule,
    PhishTankModule
  ],
  declarations: [DatasetShellComponent],
  exports: [DatasetShellComponent],
})
export class DatasetShellModule { }
