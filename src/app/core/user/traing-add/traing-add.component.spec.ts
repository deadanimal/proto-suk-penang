import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TraingAddComponent } from './traing-add.component';

describe('TraingAddComponent', () => {
  let component: TraingAddComponent;
  let fixture: ComponentFixture<TraingAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TraingAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TraingAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
