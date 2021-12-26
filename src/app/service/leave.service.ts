import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class LeaveService {

    constructor(private http:HttpClient) { }

    getleave(){
        return this.http.get<any>('assets/json/leave.json')
        .toPromise()
        .then(res => res.data );
    }
    getapprovebyposition(){
        return this.http.get<any>('assets/json/approvebyposition.json')
        .toPromise()
        .then(res => res.data );
    }
    getannualleave(){
        return this.http.get<any>('assets/json/annualleave.json')
        .toPromise()
        .then(res => res.data );
    }
    getmonth(){
        return this.http.get<any>('assets/json/month.json')
        .toPromise()
        .then(res => res.data );
    }
    getbyid(){
        return this.http.get<any>('assets/json/annualleavebyid.json')
        .toPromise()
        .then(res => res.data );
    }
}
 