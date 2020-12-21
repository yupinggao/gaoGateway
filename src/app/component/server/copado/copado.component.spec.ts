import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CopadoComponent } from './copado.component';

describe('CopadoComponent', () => {
  let component: CopadoComponent;
  let fixture: ComponentFixture<CopadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CopadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CopadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
