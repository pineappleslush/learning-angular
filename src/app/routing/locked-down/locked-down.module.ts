import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {LockedDownRoutingModule} from './locked-down-routing.module';
import {LockedDownComponent} from './locked-down/locked-down.component';


@NgModule({
  declarations: [LockedDownComponent],
  imports: [
    CommonModule,
    LockedDownRoutingModule
  ]
})
export class LockedDownModule { }
