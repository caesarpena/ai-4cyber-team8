import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhishTankComponent } from './phishtank.component';
import { PhishTankService } from './phishtank.service';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [PhishTankComponent],
  providers: [PhishTankService],
  exports: [PhishTankComponent]
  
})
export class PhishTankModule { }
 
 