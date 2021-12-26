import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { LeaveRoutingModule } from './leave-routing.module';
import { LeaveListComponent } from './leave-list/leave-list.component';
import { LeaveEntryComponent } from './leave-entry/leave-entry.component';

import { TableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { InputTextModule } from 'primeng/inputtext';
import { BlockUIModule } from 'primeng/blockui';
import { BadgeModule } from 'primeng/badge';

@NgModule({
    declarations: [
        LeaveListComponent,
        LeaveEntryComponent
    ],
    imports: [
        CommonModule,
        LeaveRoutingModule,
        ReactiveFormsModule,
        FormsModule,
        TableModule,
        TooltipModule,
        ConfirmDialogModule,
        MessagesModule,
        MessageModule,
        InputTextModule,
        BlockUIModule,
        BadgeModule
    ],
})
export class LeaveModule { }
