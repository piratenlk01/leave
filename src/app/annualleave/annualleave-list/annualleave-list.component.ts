import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { LeaveService } from 'src/app/service/leave.service';

@Component({
    selector: 'app-annualleave-list',
    templateUrl: './annualleave-list.component.html',
    styleUrls: ['./annualleave-list.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class AnnualleaveListComponent implements OnInit {
    ListLeavePlanView:any[]=[]

    constructor(
        private leaveservice: LeaveService) { }

    ngOnInit(): void {
        this.leaveservice.getannualleave().then(s => {
            this.ListLeavePlanView = s
        })
    }

}
