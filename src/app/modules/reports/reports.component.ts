import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss']
})
export class ReportsComponent {
  value: string;

  date: Date;

  public constructor(private router: Router) {}

  public goToNewReport() {
    this.router.navigate(['dashboard', 'new-report']);
  }
}
