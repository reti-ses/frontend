import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PremessaComponent } from './premessa.component';

describe('PremessaComponent', () => {
  let component: PremessaComponent;
  let fixture: ComponentFixture<PremessaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PremessaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PremessaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
