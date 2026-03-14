import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CalendarComponent } from './calendar.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { provideRouter } from '@angular/router';

describe('CalendarComponent', () => {
  let component: CalendarComponent;
  let fixture: ComponentFixture<CalendarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalendarComponent, NoopAnimationsModule],
      providers: [provideRouter([])]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should generate days in month correctly', () => {
    component.currentDate = new Date(2026, 2, 1); // March 2026
    component.generateCalendar();
    expect(component.daysInMonth.length).toBe(42); 
    // March 1st 2026 is a Sunday (index 0). So first day should be March 1st.
    expect(component.daysInMonth[0].date.getDate()).toBe(1);
    expect(component.daysInMonth[0].isCurrentMonth).toBe(true);
  });

  it('should navigate to next and previous month', () => {
    component.currentDate = new Date(2026, 2, 15);
    component.nextMonth();
    expect(component.currentDate.getMonth()).toBe(3); // April
    component.prevMonth();
    expect(component.currentDate.getMonth()).toBe(2); // March
  });

  it('should select a date', () => {
    component.generateCalendar();
    const dayToSelect = component.daysInMonth[15];
    component.selectDate(dayToSelect);
    expect(component.selectedDate).toEqual(dayToSelect.date);
    expect(dayToSelect.isSelected).toBe(true);
  });

  it('should identify if selected date has an event', () => {
    component.currentDate = new Date(2026, 2, 1); 
    component.eventDates = [10]; // Event on the 10th
    component.generateCalendar();
    
    const dayWithEvent = component.daysInMonth.find(d => d.date.getDate() === 10 && d.isCurrentMonth)!;
    component.selectDate(dayWithEvent);
    
    expect(component.hasEventOnSelectedDate).toBe(true);
  });
});
