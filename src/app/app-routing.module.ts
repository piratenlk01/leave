import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApproveComponent } from './approve/approve.component';

const routes: Routes = [
    {path:'approve',component:ApproveComponent},
    {path:'leave', loadChildren: () => import('src/app/leave/leave.module').then(m => m.LeaveModule) },
    {path:'annualleave', loadChildren: () => import('src/app/annualleave/annualleave.module').then(m => m.AnnualleaveModule) },
    {path:'hr', loadChildren: () => import('src/app/hr/hr.module').then(m => m.HrModule) },
    {path:'hrconfig', loadChildren: () => import('src/app/hrconfig/hrconfig.module').then(m => m.HrconfigModule) },
    {path:'settingapprove', loadChildren: () => import('src/app/settingapprove/settingapprove.module').then(m => m.SettingapproveModule) }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true })],
    exports: [RouterModule]
})
export class AppRoutingModule { }
