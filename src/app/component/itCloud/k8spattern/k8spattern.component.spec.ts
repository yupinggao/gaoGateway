import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { K8spatternComponent } from "./k8spattern.component";

describe('K8spatternComponent', () => {
  let component: K8spatternComponent;
  let fixture: ComponentFixture<K8spatternComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ K8spatternComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(K8spatternComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
