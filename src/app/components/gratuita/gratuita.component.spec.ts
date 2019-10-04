import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GratuitaComponent } from './gratuita.component';

describe('GratuitaComponent', () => {
  let component: GratuitaComponent;
  let fixture: ComponentFixture<GratuitaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GratuitaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GratuitaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
