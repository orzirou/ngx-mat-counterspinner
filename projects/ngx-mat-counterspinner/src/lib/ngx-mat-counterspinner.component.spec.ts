import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxMatCounterspinnerComponent } from './ngx-mat-counterspinner.component';

describe('NgxMatCounterspinnerComponent', () => {
  let component: NgxMatCounterspinnerComponent;
  let fixture: ComponentFixture<NgxMatCounterspinnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxMatCounterspinnerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgxMatCounterspinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
