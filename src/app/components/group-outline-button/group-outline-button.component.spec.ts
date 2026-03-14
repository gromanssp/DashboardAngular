import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { provideRouter } from '@angular/router';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupOutlineButtonComponent } from './group-outline-button.component';

describe('GroupOutlineButtonComponent', () => {
  let component: GroupOutlineButtonComponent;
  let fixture: ComponentFixture<GroupOutlineButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [provideRouter([])],
      imports: [NoopAnimationsModule, GroupOutlineButtonComponent]
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
