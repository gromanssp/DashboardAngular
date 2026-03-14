import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface CalendarDay {
  date: Date;
  isCurrentMonth: boolean;
  isToday: boolean;
  isSelected: boolean;
  hasEvent: boolean;
}

@Component({
  selector: 'app-calendar',
  imports: [CommonModule],
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.scss',
})
export class CalendarComponent implements OnInit {
  currentDate: Date = new Date();
  daysInMonth: CalendarDay[] = [];
  weekDays: string[] = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  selectedDate: Date | null = null;
  
  // Fake events for demonstration
  eventDates: number[] = [5, 12, 18, 24];

  ngOnInit() {
    this.generateCalendar();
  }

  get currentMonthName(): string {
    return this.currentDate.toLocaleString('default', { month: 'long' });
  }

  get currentYear(): number {
    return this.currentDate.getFullYear();
  }

  generateCalendar() {
    this.daysInMonth = [];
    const year = this.currentDate.getFullYear();
    const month = this.currentDate.getMonth();
    
    const firstDayOfMonth = new Date(year, month, 1);
    const lastDayOfMonth = new Date(year, month + 1, 0);
    
    const startingDayOfWeek = firstDayOfMonth.getDay();
    const totalDays = lastDayOfMonth.getDate();
    
    // Previous month days
    const prevMonthLastDay = new Date(year, month, 0).getDate();
    for (let i = startingDayOfWeek - 1; i >= 0; i--) {
      this.daysInMonth.push({
        date: new Date(year, month - 1, prevMonthLastDay - i),
        isCurrentMonth: false,
        isToday: false,
        isSelected: false,
        hasEvent: false
      });
    }
    
    // Current month days
    const today = new Date();
    for (let i = 1; i <= totalDays; i++) {
      const date = new Date(year, month, i);
      const isToday = date.toDateString() === today.toDateString();
      const isSelected = this.selectedDate ? date.toDateString() === this.selectedDate.toDateString() : false;
      const hasEvent = this.eventDates.includes(i);
      
      this.daysInMonth.push({
        date,
        isCurrentMonth: true,
        isToday,
        isSelected,
        hasEvent
      });
    }
    
    // Next month days to fill 6 rows (42 days)
    const remainingDays = 42 - this.daysInMonth.length;
    for (let i = 1; i <= remainingDays; i++) {
      this.daysInMonth.push({
        date: new Date(year, month + 1, i),
        isCurrentMonth: false,
        isToday: false,
        isSelected: false,
        hasEvent: false
      });
    }
  }

  prevMonth() {
    this.currentDate = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth() - 1, 1);
    this.generateCalendar();
  }

  nextMonth() {
    this.currentDate = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth() + 1, 1);
    this.generateCalendar();
  }

  selectDate(day: CalendarDay) {
    this.selectedDate = day.date;
    // Update selected state in the array
    this.daysInMonth.forEach(d => {
      d.isSelected = d.date.toDateString() === this.selectedDate?.toDateString();
    });
  }

  get hasEventOnSelectedDate(): boolean {
    return this.daysInMonth.find(d => d.isSelected)?.hasEvent ?? false;
  }
}
