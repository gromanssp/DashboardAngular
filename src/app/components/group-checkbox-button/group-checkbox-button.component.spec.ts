import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { provideRouter } from '@angular/router';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupCheckboxButtonComponent } from './group-checkbox-button.component';

describe('GroupCheckboxButtonComponent', () => {
  let component: GroupCheckboxButtonComponent;
  let fixture: ComponentFixture<GroupCheckboxButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [provideRouter([])],
      imports: [NoopAnimationsModule, GroupCheckboxButtonComponent]
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
