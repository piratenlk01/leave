import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfirmationService } from 'primeng/api';
import { LeaveService } from 'src/app/service/leave.service';

declare var $: any;

@Component({
    selector: 'app-annualleave-entry',
    templateUrl: './annualleave-entry.component.html',
    styleUrls: ['./annualleave-entry.component.scss'],
    encapsulation: ViewEncapsulation.None,
    providers: [ConfirmationService]
})
export class AnnualleaveEntryComponent implements OnInit {
    Months: any[] = [];
    ShowSelectDay: string;
    LeavePlanTypeSelect2: any[]=[];
    ShowYear:string;

    constructor(
        private confirmationService: ConfirmationService,
        private leaveservice: LeaveService,
        private _router: Router,
        private router: ActivatedRoute) { 
            this.LeavePlanTypeSelect2 = [
                {
                  "id": "FULLDAY",
                  "text": "เต็มวัน"
                },
                {
                  "id": "MORNING",
                  "text": "ช่วงเช้า"
                },
                {
                  "id": "AFTERNOON",
                  "text": "ช่วงบ่าย"
                }
              ]
        }

    ngOnInit(): void {
        let _id = this.router.snapshot.paramMap.get('Id')

        if(_id){
            this.leaveservice.getbyid().then(s => {
                this.Months = s.PlanTemplate.Months
                this.ShowYear = s.YearTextThai+'/'+s.YearTextEng
            })
        }else{
            this.leaveservice.getmonth().then(s => {
                this.Months = s
                this.ShowYear = '2565/2022'
            })
        }


    }

    SelectDay(data: any) {
        this.ShowSelectDay = data.DatetimeTextThai
        $('#Model1').modal('show')
    }

    backpage() {
        this.confirmationService.confirm({
            message: 'ย้อนกลับ',
            header: 'Confirmation',
            icon: 'fa fa-arrow-circle-left',
            accept: () => {
                this._router.navigate(['annualleave']);
            },
            reject: (type) => {
            }
        });
    }

}
