import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { provideRouter } from '@angular/router';
import { ImgPipe } from './img.pipe';

describe('ImgPipe', () => {
  it('create an instance', () => {
    const pipe = new ImgPipe();
    expect(pipe).toBeTruthy();
  });
});
