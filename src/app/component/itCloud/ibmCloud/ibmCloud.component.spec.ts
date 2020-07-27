import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IbmCloudComponent } from './ibmCloud.component';

describe('IbmCloudComponent', () => {
  let component: IbmCloudComponent;
  let fixture: ComponentFixture<IbmCloudComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IbmCloudComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IbmCloudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
