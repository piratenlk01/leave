import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { LeaveViewModel } from 'src/app/model/leave';
import { LeaveService } from 'src/app/service/leave.service';

@Component({
    selector: 'app-leave-list',
    templateUrl: './leave-list.component.html',
    styleUrls: ['./leave-list.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class LeaveListComponent implements OnInit {
    leavelist: LeaveViewModel[] = []

    constructor(
        private leaveservice:LeaveService) { }

    ngOnInit(): void {
        this.leaveservice.getleave().then(s => {
            let _data =  s.filter(i => i.Status === 4)
            if(_data.length > 0){
                this.leavelist = _data
            }
        })
    }

}
