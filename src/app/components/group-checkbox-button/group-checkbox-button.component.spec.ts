import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupCheckboxButtonComponent } from './group-checkbox-button.component';

describe('GroupCheckboxButtonComponent', () => {
  let component: GroupCheckboxButtonComponent;
  let fixture: ComponentFixture<GroupCheckboxButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GroupCheckboxButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GroupCheckboxButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
