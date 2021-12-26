import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AnnualleaveRoutingModule } from './annualleave-routing.module';
import { AnnualleaveListComponent } from './annualleave-list/annualleave-list.component';
import { AnnualleaveEntryComponent } from './annualleave-entry/annualleave-entry.component';

import { TableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { InputTextModule } from 'primeng/inputtext';
import { BlockUIModule } from 'primeng/blockui';
import { BadgeModule } from 'primeng/badge';

@NgModule({
  declarations: [AnnualleaveListComponent, AnnualleaveEntryComponent],
  imports: [
    CommonModule,
    AnnualleaveRoutingModule,
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
  ]
})
export class AnnualleaveModule { }
