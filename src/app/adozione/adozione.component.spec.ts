import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdozioneComponent } from './adozione.component';

describe('AdozioneComponent', () => {
  let component: AdozioneComponent;
  let fixture: ComponentFixture<AdozioneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdozioneComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdozioneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
