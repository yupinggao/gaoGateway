import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CloudSecurityComponent } from './cloudSecurity.component';

describe('CloudSecurityComponent', () => {
  let component: CloudSecurityComponent;
  let fixture: ComponentFixture<CloudSecurityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CloudSecurityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CloudSecurityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
