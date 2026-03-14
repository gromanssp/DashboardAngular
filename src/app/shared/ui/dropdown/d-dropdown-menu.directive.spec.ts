import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { provideRouter } from '@angular/router';
import { DDropdownMenuDirective } from './d-dropdown-menu.directive';

describe('DDropdownMenuDirective', () => {
  it('should create an instance', () => {
    const directive = new DDropdownMenuDirective();
    expect(directive).toBeTruthy();
  });
});
