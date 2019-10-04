import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CosaSonoComponent } from './cosa-sono.component';

describe('CosaSonoComponent', () => {
  let component: CosaSonoComponent;
  let fixture: ComponentFixture<CosaSonoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CosaSonoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CosaSonoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
