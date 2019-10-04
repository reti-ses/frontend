import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CosaFareComponent } from './cosa-fare.component';

describe('CosaFareComponent', () => {
  let component: CosaFareComponent;
  let fixture: ComponentFixture<CosaFareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CosaFareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CosaFareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
