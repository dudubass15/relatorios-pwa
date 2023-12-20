import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { ButtonModule } from 'primeng/button';
import { MessageErrorModule } from 'src/app/shared/message-error/message-error.module';

@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    ButtonModule,
    MessageErrorModule
  ]
})
export class DashboardModule { }
