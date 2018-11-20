import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertdateComponent } from './insertdate.component';

describe('InsertdateComponent', () => {
  let component: InsertdateComponent;
  let fixture: ComponentFixture<InsertdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsertdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
