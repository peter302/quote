import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimesinceComponent } from './timesince.component';

describe('TimesinceComponent', () => {
  let component: TimesinceComponent;
  let fixture: ComponentFixture<TimesinceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimesinceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimesinceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
