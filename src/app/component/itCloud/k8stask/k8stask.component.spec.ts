import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { K8staskComponent } from "./k8stask.component";

describe('K8staskComponent', () => {
  let component: K8staskComponent;
  let fixture: ComponentFixture<K8staskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ K8staskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(K8staskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
