import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfirmationService } from 'primeng/api';
import { CalculatorLeaveTotalDayModel, LeaveApproveViewModel, LeaveViewModel } from 'src/app/model/leave';
import { LeaveService } from 'src/app/service/leave.service';
import { DateService } from 'src/app/shared/date.service';

@Component({
    selector: 'app-leave-entry',
    templateUrl: './leave-entry.component.html',
    styleUrls: ['./leave-entry.component.scss'],
    encapsulation: ViewEncapsulation.None,
    providers: [ConfirmationService]
})
export class LeaveEntryComponent implements OnInit {

    LeaveType:string = null;   // ประเภทการลา
    LeaveView=<LeaveViewModel>{} // GetById
    CalculatorLeaveTotalDay=<CalculatorLeaveTotalDayModel>{}
    LeaveApproveView:LeaveApproveViewModel[]=[]

    LeaveNew:FormGroup

    constructor(
        private fb: FormBuilder,
        private confirmationService: ConfirmationService,
        private leaveservice: LeaveService,
        private _router: Router,
        private router: ActivatedRoute,
        private _date:DateService
    ) { }

    ngOnInit(): void {
        this.LeaveNew = this.fb.group({
            Year: new FormControl({value:'',disabled:this.LeaveView.Id}, Validators.required),
            LeaveType: new FormControl('', Validators.required),
            Reason: new FormControl('', Validators.required),
            DateStart: new FormControl('', Validators.required),
            DateEnd: new FormControl('', Validators.required),
            TotalDay: new FormControl('', Validators.required),
            Phone: new FormControl('', Validators.required),
            Remark: new FormControl('')
        })

        let _id = this.router.snapshot.paramMap.get('Id')
        this.leaveservice.getapprovebyposition().then(s => {
            this.LeaveApproveView = s.ApproveDetail
        })
        if(_id){
            this.leaveservice.getleave().then(s => {
                let _item = s.filter(i => i.Id === parseInt(_id))
                this.LeaveView = _item[0]
                this.LeaveNew.get('Year').setValue(_item[0].Year)
                this.LeaveNew.get('LeaveType').setValue(_item[0].LeaveTypeCode)
                this.LeaveNew.get('Reason').setValue(_item[0].Reason)
                this.LeaveNew.get('DateStart').setValue(this._date.FormatDateString(_item[0].DateStartText))
                this.LeaveNew.get('DateEnd').setValue(this._date.FormatDateString(_item[0].DateEndText))
                this.LeaveNew.get('TotalDay').setValue(_item[0].TotalDay)
                this.LeaveNew.get('Phone').setValue(_item[0].Phone)
                this.LeaveNew.get('Remark').setValue(_item[0].Remark)
            })
        }else{
            this.LeaveView.StaffName = "ต้นไม้  ใบหญ้า"
        }

    }
    get year() { return this.LeaveNew.get('Year'); }
    get leavetype() { return this.LeaveNew.get('LeaveType'); }
    get reason() { return this.LeaveNew.get('Reason'); }
    get datestart() { return this.LeaveNew.get('DateStart'); }
    get dateend() { return this.LeaveNew.get('DateEnd'); }
    get totaldayleave() { return this.LeaveNew.get('TotalDayLeave'); }
    get phone() { return this.LeaveNew.get('Phone'); }
    get ramark() { return this.LeaveNew.get('Remark'); }

    insert(){
        if (this.LeaveNew.status == "INVALID") {
            this.LeaveNew.markAllAsTouched()
            return false;
        }
    }

    backpage() {
        this.confirmationService.confirm({
            message: 'ย้อนกลับ',
            header: 'Confirmation',
            icon: 'fa fa-arrow-circle-left',
            accept: () => {
                this._router.navigate(['leave']);
            },
            reject: (type) => {
            }
        });
    }



}
