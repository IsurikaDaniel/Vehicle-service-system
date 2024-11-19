import { AfterViewInit, Component } from '@angular/core';
import ApexCharts from 'apexcharts';

@Component({
  selector: 'app-donutchart',
  standalone: true,
  templateUrl: './donutchart.component.html',
    styleUrl: './donutchart.component.css'
})
export class DonutchartComponent implements AfterViewInit {
  constructor() {}

  ngAfterViewInit(): void {
    const chartContainer = document.getElementById('donut-chart');
    if (chartContainer && typeof ApexCharts !== 'undefined') {
      const chart = new ApexCharts(chartContainer as HTMLElement, this.getChartOptions());
      chart.render();

      const checkboxes = document.querySelectorAll<HTMLInputElement>('#devices input[type="checkbox"]');
      checkboxes.forEach((checkbox) => {
        checkbox.addEventListener('change', (event) => this.handleCheckboxChange(event, chart));
      });
    }
  }

  private getChartOptions() {
    return {
      series: [35.1, 23.5, 2.4, 5.4],
      colors: ['#1C64F2', '#16BDCA', '#FDBA8C', '#E74694'],
      chart: {
        height: 320,
        width: '100%',
        type: 'donut',
      },
      stroke: {
        colors: ['transparent'],
      },
      plotOptions: {
        pie: {
          donut: {
            labels: {
              show: true,
              name: {
                show: true,
                fontFamily: 'Inter, sans-serif',
                offsetY: 20,
              },
              total: {
                showAlways: true,
                show: true,
                label: 'Unique Visitors',
                fontFamily: 'Inter, sans-serif',
                formatter: (w: any) => {
                  const sum = w.globals.seriesTotals.reduce((a: number, b: number) => a + b, 0);
                  return '$' + sum + 'k';
                },
              },
              value: {
                show: true,
                fontFamily: 'Inter, sans-serif',
                offsetY: -20,
                formatter: (value: number) => value + 'k',
              },
            },
            size: '80%',
          },
        },
      },
      grid: {
        padding: {
          top: -2,
        },
      },
      labels: ['Direct', 'Sponsor', 'Affiliate', 'Email marketing'],
      dataLabels: {
        enabled: false,
      },
      legend: {
        position: 'bottom',
        fontFamily: 'Inter, sans-serif',
      },
      yaxis: {
        labels: {
          formatter: (value: number) => value + 'k',
        },
      },
      xaxis: {
        labels: {
          formatter: (value: number) => value + 'k',
        },
        axisTicks: {
          show: false,
        },
        axisBorder: {
          show: false,
        },
      },
    };
  }

  private handleCheckboxChange(event: Event, chart: ApexCharts): void {
    const checkboxes = document.querySelectorAll<HTMLInputElement>('#devices input[type="checkbox"]');
    const selectedValues: string[] = Array.from(checkboxes)
      .filter((checkbox) => checkbox.checked)
      .map((checkbox) => checkbox.value);

    const allData = {
      Direct: 35.1,
      Sponsor: 23.5,
      Affiliate: 2.4,
      'Email marketing': 5.4,
    };

    const newSeries = selectedValues.map((key) => allData[key as keyof typeof allData] || 0);

    // Update the chart with filtered data
    chart.updateSeries(newSeries.length > 0 ? newSeries : [35.1, 23.5, 2.4, 5.4]);
  }
}
