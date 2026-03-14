import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { provideRouter } from '@angular/router';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupRadioButtonComponent } from './group-radio-button.component';

describe('GroupRadioButtonComponent', () => {
  let component: GroupRadioButtonComponent;
  let fixture: ComponentFixture<GroupRadioButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [provideRouter([])],
      imports: [NoopAnimationsModule, GroupRadioButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GroupRadioButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
