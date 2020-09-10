import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BigDataComponent } from './bigData.component';

describe('ApplicationComponent', () => {
  let component: BigDataComponent;
  let fixture: ComponentFixture<BigDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BigDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BigDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
