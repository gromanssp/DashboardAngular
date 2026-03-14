import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { provideRouter } from '@angular/router';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupVerticalDropdownButtonComponent } from './group-vertical-dropdown-button.component';

describe('GroupVerticalDropdownButtonComponent', () => {
  let component: GroupVerticalDropdownButtonComponent;
  let fixture: ComponentFixture<GroupVerticalDropdownButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [provideRouter([])],
      imports: [NoopAnimationsModule, GroupVerticalDropdownButtonComponent]
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
