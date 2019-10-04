import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgrammaSocialeComponent } from './programma-sociale.component';

describe('ProgrammaSocialeComponent', () => {
  let component: ProgrammaSocialeComponent;
  let fixture: ComponentFixture<ProgrammaSocialeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgrammaSocialeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgrammaSocialeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
