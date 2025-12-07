import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupToolbarButtonComponent } from './group-toolbar-button.component';

describe('GroupToolbarButtonComponent', () => {
  let component: GroupToolbarButtonComponent;
  let fixture: ComponentFixture<GroupToolbarButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GroupToolbarButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GroupToolbarButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
