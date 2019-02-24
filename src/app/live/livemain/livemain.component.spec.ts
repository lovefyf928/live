import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LivemainComponent } from './livemain.component';

describe('LivemainComponent', () => {
  let component: LivemainComponent;
  let fixture: ComponentFixture<LivemainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LivemainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LivemainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
