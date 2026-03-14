import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-charts',
    templateUrl: './charts.component.html',
    styleUrl: './charts.component.scss',
    imports: [CommonModule],
    standalone: true
})
export class ChartsComponent {
  // Fake data for CSS bar chart
  barChartData = [
    { label: 'Jan', value: 45 },
    { label: 'Feb', value: 72 },
    { label: 'Mar', value: 54 },
    { label: 'Apr', value: 91 },
    { label: 'May', value: 68 },
    { label: 'Jun', value: 83 },
    { label: 'Jul', value: 39 },
    { label: 'Aug', value: 62 }
  ];

  // Fake data for horizontal progress/bar chart
  salesData = [
    { product: 'Premium Plan', percentage: 85, color: 'bg-indigo-600' },
    { product: 'Standard Plan', percentage: 65, color: 'bg-blue-500' },
    { product: 'Basic Plan', percentage: 40, color: 'bg-teal-400' },
    { product: 'Enterprise', percentage: 25, color: 'bg-orange-400' }
  ];
}
