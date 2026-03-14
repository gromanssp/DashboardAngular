import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { provideRouter } from '@angular/router';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonsGroupComponent } from './buttons-group.component';

describe('ButtonsGroupComponent', () => {
  let component: ButtonsGroupComponent;
  let fixture: ComponentFixture<ButtonsGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [provideRouter([])],
      imports: [NoopAnimationsModule, ButtonsGroupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonsGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
