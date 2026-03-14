import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { provideRouter } from '@angular/router';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupDropdownButtonComponent } from './group-dropdown-button.component';

describe('GroupDropdownButtonComponent', () => {
  let component: GroupDropdownButtonComponent;
  let fixture: ComponentFixture<GroupDropdownButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [provideRouter([])],
      imports: [NoopAnimationsModule, GroupDropdownButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GroupDropdownButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
