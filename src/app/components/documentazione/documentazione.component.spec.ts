import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentazioneComponent } from './documentazione.component';

describe('DocumentazioneComponent', () => {
  let component: DocumentazioneComponent;
  let fixture: ComponentFixture<DocumentazioneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocumentazioneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentazioneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
