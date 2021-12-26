import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AnnualleaveComponent } from './annualleave.component';
import { AnnualleaveListComponent } from './annualleave-list/annualleave-list.component';
import { AnnualleaveEntryComponent } from './annualleave-entry/annualleave-entry.component';

const routes: Routes = [
    {
        path:'',
        component:AnnualleaveComponent,
        children:[
            {path:'',component:AnnualleaveListComponent},
            {path:'entry',component:AnnualleaveEntryComponent},
            {path:'entry/:Id',component:AnnualleaveEntryComponent}
        ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnnualleaveRoutingModule { }
