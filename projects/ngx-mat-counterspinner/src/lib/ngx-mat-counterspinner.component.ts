import {
  Component,
  OnInit,
  OnChanges,
  SimpleChanges,
  Input,
} from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { LegacyProgressSpinnerMode as ProgressSpinnerMode } from '@angular/material/legacy-progress-spinner';
import { isNil as _isNil } from 'lodash-es';

import { CounterSpinnerDisplayMode } from './ngx-mat-counterspinner.enum';

@Component({
  selector: 'ngx-mat-counterspinner',
  templateUrl: './ngx-mat-counterspinner.component.html',
  styleUrls: ['./ngx-mat-counterspinner.component.scss'],
})
export class NgxMatCounterspinnerComponent implements OnInit, OnChanges {
  /** value */
  @Input() value?: number;

  /** display mode */
  @Input() display = CounterSpinnerDisplayMode.Value;

  /** max value */
  @Input() max?: number;

  /** unit of ratio or value */
  @Input() unitWord?: string;

  /** theme color */
  @Input() color?: ThemePalette;

  /** spinner mode */
  @Input() mode: ProgressSpinnerMode = 'indeterminate';

  /** visible tooltip */
  @Input() showTooltip = false;

  /** diameter */
  @Input() diameter = 100;

  /** @ignore display value */
  _dispValue = '';

  /** @ignore tooltip message */
  _tooltip = '';

  constructor() {}

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    if (
      changes['value'] ||
      changes['max'] ||
      changes['display'] ||
      changes['unitWord']
    ) {
      if (_isNil(this.value) && _isNil(this.max)) {
        this._dispValue = this._tooltip = '';
      } else {
        if (this.display === CounterSpinnerDisplayMode.Ratio) {
          if (!this.max) {
            this._dispValue = this._tooltip = 'N/A';
          } else if (!this.value) {
            this._dispValue = this._tooltip = '';
          } else {
            const ratio = Math.floor((this.value / this.max) * 100);
            this._dispValue = `${ratio}${this.unitWord || '%'}`;
            this._tooltip = `${this.value} / ${this.max}`;
          }
        } else {
          this._dispValue = this.value
            ? `${this.value}${this.unitWord || ''}`
            : '';
          this._tooltip = this.max
            ? `${this.value} / ${this.max}`
            : `${this.value}`;
        }
      }
    }
  }
}
