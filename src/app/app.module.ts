import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LayoutModule } from './shared/layout/layout.module';
import { ApproveComponent } from './approve/approve.component';
import { LeaveComponent } from './leave/leave.component';
import { AnnualleaveComponent } from './annualleave/annualleave.component';
import { HrComponent } from './hr/hr.component';
import { HrconfigComponent } from './hrconfig/hrconfig.component';
import { SettingapproveComponent } from './settingapprove/settingapprove.component';

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
    AppComponent,
    ApproveComponent,
    LeaveComponent,
    AnnualleaveComponent,
    HrComponent,
    HrconfigComponent,
    SettingapproveComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    LayoutModule,
    TableModule,
    TooltipModule,
    ConfirmDialogModule,
    MessagesModule,
    MessageModule,
    InputTextModule,
    BlockUIModule,
    BadgeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
