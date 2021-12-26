
export interface ListLeaveViewModel {
    Leave: LeaveViewModel[]
}

export interface LeaveViewModel {
    Id: number;
    LeaveNo: string;
    Year: number;
    CompCode: string;

    StaffId: number;
    StaffName: string;

    WorkingId: number;
    DivisionCode: string;
    DivisionNameEng: string;
    DivisionNameThai: string;
    DepartmentCode: string;
    DepartmentNameEng: string;
    DepartmentNameThai: string;
    SectionCode: string;
    SectionNameEng: string;
    SectionNameThai: string;
    PositionCode: string;
    PositionNameEng: string;
    PositionNameThai: string;

    LeaveTypeCode: string;
    LeaveTypeThai: string;
    LeaveTypeEng: string;

    Status: number;
    StatusText: string;
    StatusColor: string;

    DateStart: Date
    DateStartText: string;
    DateStartPeriodType: string;
    DateStartPeriodTypeText: string;
    TimeStart: string;

    DateEnd: Date
    DateEndText: string;
    DateEndPeriodType: string;
    DateEndPeriodTypeText: string;
    TimeEnd: string;

    TotalDay: number;
    TotalHour: number;

    TotalLeaveTypeDay: number;
    TotalDayUse: number;
    TotalHourUse: number;
    TotalDayBalance: number;
    TotalHourBalance: number;

    IsCurrentLeavePlan: boolean;

    Reason: string;
    Phone: string;
    ContactAddress: string;
    Remark: string;
    CreateDatetime: string;

    TotalApprove: number;
    CountApprove: number;

    LeavePlanText: string;
    ListBuddyAccept: LeaveApproveViewModel[]
    ListApprove: LeaveApproveViewModel[]
    Logs: LeaveLogViewModel[]
    Detail: LeaveDetailViewModel[]

    IsBuddyAccept: boolean;
    IsApprove: boolean;
    IsCancel: boolean;
    IsRequestCancel: boolean;
    IsApproveRequestCancel: boolean;
    IsDeleteFileUpdate: boolean;

    StatusGroup: string;
}

export interface ListLeaveUseLeavePlanModel {
    ListLeavePlan: LeaveUseLeavePlanModel[]
}

export interface LeaveUseLeavePlanModel {
    DetailId: string;
    DateText: string;
}

export interface LeaveApproveViewModel {
    Id: number;
    LeaveId: number;
    OrderNo: number;
    Type: number;
    TypeText: string;
    ApproveBy: number;
    ApproveName: string;
    ApproveDate: string;
    ApproveStatus: number;
    ApproveStatusText: string;
    Remark: string;
}

export interface LeaveLogViewModel {
    Id: number;
    LeaveId: number;
    Status: number;
    StatusText: string;
    LogDatetime: string;
    UserId: number;
    UserName: string;
    Remark: string;
}

export interface LeaveDetailViewModel {
    Id: number;
    LeaveId: number;
    Date: Date
    DateText: string;

    TimeFrom: Date
    TimeFromText: string;

    TimeTo: Date
    TimeToText: string;

    PeriodType: string;
    PeriodTypeText: string;

    TotalDay: number;
    TotalHour: number;
}

export interface LeaveEmployeeDetailModel {
    StaffId: number;
    StaffName: string;
    EmpNo: string;

    WorkingId: number;
    DivisionCode: string;
    DivisionNameEng: string;
    DivisionNameThai: string;
    DepartmentCode: string;
    DepartmentNameEng: string;
    DepartmentNameThai: string;
    SectionCode: string;
    SectionNameEng: string;
    SectionNameThai: string;
    PositionCode: string;
    PositionNameEng: string;
    PositionNameThai: string;

    CtrlOfficeHoursId: number;
}

export interface LeaveParameterModel {
    // [Required(ErrorMessage = "กรุณาระบุ ปี")]
    Year: any;
    // [Required(ErrorMessage = "กรุณาระบุ บริษัท")]
    CompCode: string;
    StaffId: number;
    LeaveTypeCode: string;
    Status: number;
    LeaveNo: string;
    DivisionCode: string;
    DepartmentCode: string;
    SectionCode: string;

    DateStart: string;
    DateEnd: string;

    // HRMode: boolean;
    // IsHistory: boolean;
}

export interface LeaveModel {
    // [Required(ErrorMessage = "กรุณาระบุ ปี")]
    Year: number;
    // [Required(ErrorMessage = "กรุณาระบุ บริษัท")]
    CompCode: string;
    // [Required(ErrorMessage = "กรุณาระบุ พนักงาน")]
    StaffId: number;
    // [Required(ErrorMessage = "กรุณาระบุ CtrlOfficeHoursId")]
    CtrlOfficeHoursId: number;
    // [Required(ErrorMessage = "กรุณาระบุ Working Id")]
    WorkingId: number;
    // [Required(ErrorMessage = "กรุณาระบุ ประเภทการลา")]
    LeaveTypeCode: string;

    // [Required(ErrorMessage = "กรุณาระบุ วันที่เริ่ม")]
    DateStart: string
    // [Required(ErrorMessage = "กรุณาระบุ ช่วงเวลาเริ่ม")]
    DateStartPeriodType: string;
    TimeStart: string

    // [Required(ErrorMessage = "กรุณาระบุ วันที่สิ้นสุด")]
    DateEnd: string
    // [Required(ErrorMessage = "กรุณาระบุ ช่วงเวลาสิ้นสุด")]
    DateEndPeriodType: string;
    TimeEnd: string

    IsCurrentLeavePlan: boolean;

    // [Required(ErrorMessage = "กรุณาระบุ เหตุผลการลา")]
    Reason: string;
    Phone: string;
    ContactAddress: string;
    Remark: string;

    HRMode: boolean;

    // [Required(ErrorMessage = "กรุณาระบุ Detail")]
    Detail: LeaveDetailViewModel[]

    ListLeavePlan: string[]; //detail id

    ListBuddy: LeaveListApproveModel[]

    ListApprove: LeaveListApproveModel[]
}

export interface LeaveListApproveModel {
    OrderNo: number;
    ApproveBy: number;
}

export interface LeaveCancelModel {
    // [Required(ErrorMessage = "กรุณาระบุ LeaveId")]
    LeaveId: number;
    // [Required(ErrorMessage = "กรุณาระบุ บริษัท")]
    CompCode: string;
    // [Required(ErrorMessage = "กรุณาระบุ เหตุผล")]
    Remark: string;
}

export interface LeaveApproveModel {
    // [Required(ErrorMessage = "กรุณาระบุ LeaveId")]
    LeaveId: number;
    // [Required(ErrorMessage = "กรุณาระบุ บริษัท")]
    CompCode: string;
    IsApprove: boolean;
    // [Required(ErrorMessage = "กรุณาระบุ เหตุผล")]
    Remark: string;
}

export interface LeaveInsertlogStatusModel {
    LeaveId: number;
    StatusId: number;
    StatusText: string;
    UserId: number;
    Remark: string;
}

export interface LeaveCalculatorTotalDayBalanceModel {
    TotalDay: number;
    TotalDayUse: number;
    TotalHourUse: number;
    TotalDayBalance: number;
    TotalHourBalance: number;
}

export interface CalculatorLeaveTotalDayParameterModel {
    // [Required(ErrorMessage = "กรุณาระบุ พนักงาน")]
    StaffId: number;
    // [Required(ErrorMessage = "กรุณาระบุ CtrlOfficeHoursId")]
    CtrlOfficeHoursId: number;
    // [Required(ErrorMessage = "กรุณาระบุ ปี")]
    Year: string;
    // [Required(ErrorMessage = "กรุณาระบุ บริษัท")]
    CompCode: string;
    // [Required(ErrorMessage = "กรุณาระบุ ฝ่าย")]
    DivisionCode: string;
    DepartmentCode: string;

    // [Required(ErrorMessage = "กรุณาระบุ วันที่เริ่ม")]
    DateStart: string
    // [Required(ErrorMessage = "กรุณาระบุ ช่วงเวลาเริ่ม")]
    DateStartPeriodType: string;
    TimeStart: string

    // [Required(ErrorMessage = "กรุณาระบุ วันที่สิ้นสุด")]
    DateEnd: string
    // [Required(ErrorMessage = "กรุณาระบุ ช่วงเวลาสิ้นสุด")]
    DateEndPeriodType: string;
    TimeEnd: string
    LeaveTypeCode: string;
}

export interface LeaveCalculatorTotalDayBalanceParemeterModel {
    // [Required(ErrorMessage = "กรุณาระบุ พนักงาน")]
    StaffId: number;
    // [Required(ErrorMessage = "กรุณาระบุ CtrlOfficeHoursId")]
    CtrlOfficeHoursId: number;
    // [Required(ErrorMessage = "กรุณาระบุ ปี")]
    Year: number;
    // [Required(ErrorMessage = "กรุณาระบุ บริษัท")]
    CompCode: string;
    // [Required(ErrorMessage = "กรุณาระบุ ประเภทการลา")]
    LeaveTypeCode: string;
}


export interface CalculatorLeaveTotalDayModel {
    TotalDay: number;
    TotalHour: number;
    Detail: LeaveDetailViewModel[]
}

export interface LeaveCurrentApproveModel {
    CurrentApproveId: number;
    TotalAll: number;
    TotalDone: number;
    TotalOnProcess: number;
}

export interface ListGetDuplicateLeaveModel {
    DuplicateLeave: GetDuplicateLeaveModel[]
}
export interface GetDuplicateLeaveGroupDateModel {
    Date: string;
    DuplicateLeave: GetDuplicateLeaveModel[]
}
export interface GetDuplicateLeaveModel {
    Date: Date
    DateText: string;

    LeaveNo: string;
    LeaveId: number;
    LeavePlanDetailId: number;

    StaffId: number;
    StaffName: string;

    LeaveTypeCode: string;
    LeaveTypeThai: string;

    PeriodType: string;
    PeriodTypeText: string;

    Status: number;
    StatusText: string;
    StatusColor: string;

    LeavePlanDetailStatus: string;
}

export interface LeaveUploadFileModel {
    // [Required(ErrorMessage = "กรุณาระบุ Id")]
    Id: number;
    // [Required(ErrorMessage = "กรุณาระบุ บริษัท")]
    CompCode: string;
    HRMode: boolean;
}

export interface LeaveDeleteFileModel extends LeaveUploadFileModel {
    // [Required(ErrorMessage = "กรุณาระบุ File Id")]
    FileId: number;
}

export interface TemplateEmailLeaveModel {
    Id: number;
    UserIdTo: number;
    Description: string;
    StatusText: string;
    CompCode: string;

    Email: string;
}

export interface ListLeaveDashboardSumModel {
    Total: number;
    Balance: number;
    BalancePercent: string;
    BalanceEmp: string[]
    Leave: LeaveDashboardSumModel[]
}

export interface LeaveDashboardSumModel {
    BGBody: string;
    BgFooter: string;
    LeaveTypeCode: string;
    LeaveTypeText: string;
    Total: number;
    Percent: string;
    ListLeave: LeaveViewModel[]
}

export interface LeaveDashboardSumParameterModel {
    // [Required(ErrorMessage = "กรุณาระบุ วันที่")]
    Date: string;
    // [Required(ErrorMessage = "กรุณาระบุ บริษัท")]
    CompCode: string;
    // [Required(ErrorMessage = "กรุณาระบุ ฝ่าย")]
    DivisionCode: string;
    DepartmentCode: string;
    SectionCode: string;
}

export interface ListLeaveHistoryViewModel {
    LeaveHistory: LeaveHistoryViewModel[]
}

export interface LeaveHistoryViewModel {
    LeaveTypeCode: string;
    LeaveTypeText: string;
    TotalDay: number;
    TotalHour: number;
    Leave: LeaveViewModel[]
    BgBody: string;
    BgFooter: string;
}

export interface LeaveFullCalendarParameterModel {
    // [Required(ErrorMessage = "กรุณาระบุ บริษัท")]
    CompCode: string;
    // [Required(ErrorMessage = "กรุณาระบุ วันที่เริ่ม")]
    StartDate: string;
    // [Required(ErrorMessage = "กรุณาระบุ วันที่สิ้นสุด")]
    EndtDate: string;
    // [Required(ErrorMessage = "กรุณาระบุ ฝ่าย")]
    DivisionCode: string;
    DepartmentCode: string;
    SectionCode: string;
}
