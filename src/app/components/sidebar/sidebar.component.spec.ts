import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { provideRouter } from '@angular/router';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarComponent } from './sidebar.component';

describe('SidebarComponent', () => {
  let component: SidebarComponent;
  let fixture: ComponentFixture<SidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [provideRouter([])],
      imports: [NoopAnimationsModule, SidebarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should toggle submenu if item has submenu property', () => {
    const item = { title: 'Test', submenu: true, isOpen: false };
    component.toogleSubmenu(item);
    expect(item.isOpen).toBeTrue();

    component.toogleSubmenu(item);
    expect(item.isOpen).toBeFalse();
  });

  it('should not toggle submenu if item has no submenu', () => {
    const item = { title: 'Test', isOpen: false };
    component.toogleSubmenu(item);
    expect(item.isOpen).toBeFalse();
  });

  it('should close tab submenu when sidebar is not expanded', () => {
    const item = { title: 'Test', isOpen: true, url: '/test' };
    component.closeTabSubmenu(item, false);
    expect(item.isOpen).toBeFalse();
  });

  it('should return item url when sidebar is expanded', () => {
    const item = { title: 'Test', isOpen: true, url: '/test' };
    const result = component.closeTabSubmenu(item, true);
    expect(result).toEqual('/test');
    expect(item.isOpen).toBeTrue(); // Should not be modified
  });
});
