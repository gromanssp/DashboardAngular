import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WizardComponent } from './wizard.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { provideRouter } from '@angular/router';

describe('WizardComponent', () => {
  let component: WizardComponent;
  let fixture: ComponentFixture<WizardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WizardComponent, NoopAnimationsModule],
      providers: [provideRouter([])]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WizardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should start at step 0', () => {
    expect(component.currentStep).toBe(0);
  });

  it('should navigate to next step', () => {
    expect(component.currentStep).toBe(0);
    component.nextStep();
    expect(component.currentStep).toBe(1);
  });

  it('should not navigate past the last step', () => {
    component.currentStep = component.steps.length - 1;
    component.nextStep();
    expect(component.currentStep).toBe(component.steps.length - 1);
  });

  it('should navigate to previous step', () => {
    component.currentStep = 2;
    component.prevStep();
    expect(component.currentStep).toBe(1);
  });

  it('should not navigate before the first step', () => {
    component.currentStep = 0;
    component.prevStep();
    expect(component.currentStep).toBe(0);
  });

  it('should trigger alert on submit', () => {
    spyOn(window, 'alert');
    component.submit();
    expect(window.alert).toHaveBeenCalledWith('Wizard Completed Successfully!');
  });
});
