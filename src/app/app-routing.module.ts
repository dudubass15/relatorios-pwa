import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UiComponent } from './core/ui/ui.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { ReportsComponent } from './modules/reports/reports.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: UiComponent,
    children: [
      {
        path: '',
        component: DashboardComponent
      },
      {
        path: 'new-report',
        component: ReportsComponent
      }
    ]
  },
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
