import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LockedDownComponent} from './locked-down/locked-down.component';
import {AuthGuard} from '../../auth/auth.guard';

const routes: Routes = [
  {
    path: 'locked-down',
    component: LockedDownComponent,
    canActivate: [AuthGuard],
    children: [

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LockedDownRoutingModule { }
