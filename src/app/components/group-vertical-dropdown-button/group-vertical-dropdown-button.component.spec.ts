import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupVerticalDropdownButtonComponent } from './group-vertical-dropdown-button.component';

describe('GroupVerticalDropdownButtonComponent', () => {
  let component: GroupVerticalDropdownButtonComponent;
  let fixture: ComponentFixture<GroupVerticalDropdownButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GroupVerticalDropdownButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GroupVerticalDropdownButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
