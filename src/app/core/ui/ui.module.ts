import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiComponent } from './ui.component';
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';

@NgModule({
  declarations: [UiComponent],
  imports: [CommonModule, ButtonModule, MenubarModule],
  exports: [UiComponent],
})
export class UiModule {}
