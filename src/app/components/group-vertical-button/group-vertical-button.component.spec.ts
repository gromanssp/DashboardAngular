import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupVerticalButtonComponent } from './group-vertical-button.component';

describe('GroupVerticalButtonComponent', () => {
  let component: GroupVerticalButtonComponent;
  let fixture: ComponentFixture<GroupVerticalButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GroupVerticalButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GroupVerticalButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
