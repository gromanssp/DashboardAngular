import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { provideRouter } from '@angular/router';
import { DDropdowntoogleDirective } from './d-dropdowntoogle.directive';

describe('DDropdowntoogleDirective', () => {
  it('should create an instance', () => {
    const directive = new DDropdowntoogleDirective();
    expect(directive).toBeTruthy();
  });
});
