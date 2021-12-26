import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LeaveComponent } from './leave.component';
import { LeaveListComponent } from './leave-list/leave-list.component';
import { LeaveEntryComponent } from './leave-entry/leave-entry.component';

const routes: Routes = [
    {
        path:'',
        component:LeaveComponent,
        children:[
            {path:'',component:LeaveListComponent},
            {path:'entry',component:LeaveEntryComponent},
            {path:'entry/:Id',component:LeaveEntryComponent}
        ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LeaveRoutingModule { }
