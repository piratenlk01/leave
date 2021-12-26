import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { ConfirmationService } from 'primeng/api';

import { Table } from 'primeng/table';
import { LeaveViewModel } from '../model/leave';
import { LeaveService } from '../service/leave.service';

declare var $: any

@Component({
    selector: 'app-approve',
    templateUrl: './approve.component.html',
    styleUrls: ['./approve.component.scss'],
    encapsulation: ViewEncapsulation.None,
    providers: [ConfirmationService]
    

})
export class ApproveComponent implements OnInit {

    @ViewChild('dt1', { static: false }) dt1: Table

    
    leavelist:LeaveViewModel[]=[]
    
    constructor(
        private confirmationService: ConfirmationService,
        private leaveservice:LeaveService) { }

    ngOnInit(): void {
        this.leavelist = []
        this.leaveservice.getleave().then(s => {
            let _data =  s.filter(i => i.Status === 4)
            if(_data.length > 0){
                this.leavelist = _data
            }
        })
    }

    approve(){
        this.confirmationService.confirm({
            message: 'อนุมัติใบลา',
            header: 'Confirmation',
            icon: 'fas fa-thumbs-up',
            accept: () => {
                
            },
            reject: (type) => {
            }
        });
    }
    noapprove(){
        this.confirmationService.confirm({
            message: 'ไม่อนุมัติใบลา',
            header: 'Confirmation',
            icon: 'fas fa-thumbs-down',
            accept: () => {
                
            },
            reject: (type) => {
            }
        });
    }

}
