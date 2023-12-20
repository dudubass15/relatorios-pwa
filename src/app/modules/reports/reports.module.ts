import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportsComponent } from './reports.component';
import { ButtonModule } from 'primeng/button';
import { PanelModule } from 'primeng/panel';
import { DividerModule } from 'primeng/divider';
import { InputTextModule } from 'primeng/inputtext';
import { CalendarModule } from 'primeng/calendar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ReportsComponent],
  imports: [
    CommonModule,
    ButtonModule,
    PanelModule,
    DividerModule,
    InputTextModule,
    CalendarModule,
    ReactiveFormsModule,
    FormsModule
  ],
})
export class ReportsModule {}
