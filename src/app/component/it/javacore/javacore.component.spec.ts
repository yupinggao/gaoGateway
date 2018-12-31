import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JavacoreComponent } from './javacore.component';

describe('JavacoreComponent', () => {
  let component: JavacoreComponent;
  let fixture: ComponentFixture<JavacoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JavacoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JavacoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
