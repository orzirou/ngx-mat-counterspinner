import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTooltipModule } from '@angular/material/tooltip';

import { NgxMatCounterspinnerComponent } from './ngx-mat-counterspinner.component';

@NgModule({
  declarations: [NgxMatCounterspinnerComponent],
  imports: [CommonModule, MatProgressSpinnerModule, MatTooltipModule],
  exports: [NgxMatCounterspinnerComponent],
})
export class NgxMatCounterspinnerModule {}
