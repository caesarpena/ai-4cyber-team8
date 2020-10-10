import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AzSecureComponent } from './azsecure.component';
import { AzSecureService } from './azsecure.service';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
  ],
  declarations: [AzSecureComponent],
  providers: [AzSecureService],
  exports: [AzSecureComponent]
  
})
export class AzSecureModule { }
 
 