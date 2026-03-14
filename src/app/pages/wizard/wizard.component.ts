import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface WizardStep {
  title: string;
  description: string;
}

@Component({
  selector: 'app-wizard',
  imports: [CommonModule],
  templateUrl: './wizard.component.html',
  styleUrl: './wizard.component.scss',
})
export class WizardComponent {
  steps: WizardStep[] = [
    { title: 'Personal Info', description: 'Enter your basic details' },
    { title: 'Account Setup', description: 'Configure your credentials' },
    { title: 'Preferences', description: 'Set your notification choices' },
    { title: 'Review', description: 'Verify all your information' }
  ];
  
  currentStep = 0;

  nextStep() {
    if (this.currentStep < this.steps.length - 1) {
      this.currentStep++;
    }
  }

  prevStep() {
    if (this.currentStep > 0) {
      this.currentStep--;
    }
  }

  submit() {
    alert('Wizard Completed Successfully!');
  }
}
