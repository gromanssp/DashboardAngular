import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupOutlineButtonComponent } from './group-outline-button.component';

describe('GroupOutlineButtonComponent', () => {
  let component: GroupOutlineButtonComponent;
  let fixture: ComponentFixture<GroupOutlineButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GroupOutlineButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GroupOutlineButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
