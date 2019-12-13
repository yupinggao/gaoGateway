import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItCloudComponent } from './itCloud.component';

describe('ItCloudComponent', () => {
  let component: ItCloudComponent;
  let fixture: ComponentFixture<ItCloudComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItCloudComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItCloudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
