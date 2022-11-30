import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatLegacyProgressSpinnerModule as MatProgressSpinnerModule } from '@angular/material/legacy-progress-spinner';
import { MatLegacyTooltipModule as MatTooltipModule } from '@angular/material/legacy-tooltip';

import { NgxMatCounterspinnerComponent } from './ngx-mat-counterspinner.component';

@NgModule({
  declarations: [NgxMatCounterspinnerComponent],
  imports: [CommonModule, MatProgressSpinnerModule, MatTooltipModule],
  exports: [NgxMatCounterspinnerComponent],
})
export class NgxMatCounterspinnerModule {}
