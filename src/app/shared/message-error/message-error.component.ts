import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-message-error',
  templateUrl: './message-error.component.html',
  styleUrls: ['./message-error.component.scss']
})
export class MessageErrorComponent {
  @Input()
  public message: string = '';

  @Input()
  public viewIcon: boolean = false;

  @Input()
  public classIcon: string = '';
}
