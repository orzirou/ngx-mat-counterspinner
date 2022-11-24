import { Component } from '@angular/core';

import { CounterSpinnerDisplayMode } from '../../../ngx-mat-counterspinner/src/lib';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'debug-app';

  readonly CounterSpinnerDisplayMode = CounterSpinnerDisplayMode;
}
