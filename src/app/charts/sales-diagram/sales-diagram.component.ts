import { Component, OnInit, OnDestroy } from '@angular/core';
import ApexCharts from 'apexcharts';

@Component({
  selector: 'app-sales-diagram',
  standalone: true,
  imports: [],
  templateUrl: './sales-diagram.component.html',
  styleUrl: './sales-diagram.component.css' 
})
export class SalesDiagramComponent implements OnInit, OnDestroy {
  private chart: ApexCharts | undefined;

  ngOnInit(): void {
    this.renderChart();
  }

  private renderChart(): void {
    const options: ApexCharts.ApexOptions = {
      xaxis: {
        categories: ['01 Feb', '02 Feb', '03 Feb', '04 Feb', '05 Feb', '06 Feb', '07 Feb'],
        labels: {
          show: true,
          style: {
            fontFamily: "Inter, sans-serif",
            cssClass: 'text-xs font-normal fill-gray-500 dark:fill-gray-400'
          }
        },
        axisBorder: { show: false },
        axisTicks: { show: false },
      },
      yaxis: {
        labels: {
          show: true,
          style: {
            fontFamily: "Inter, sans-serif",
            cssClass: 'text-xs font-normal fill-gray-500 dark:fill-gray-400'
          },
          formatter: (value: number): string => `$${value}`,
        }
      },
      series: [
        { name: "Developer Edition", data: [150, 141, 145, 152, 135, 125], color: "#1A56DB" },
        { name: "Designer Edition", data: [43, 13, 65, 12, 42, 73], color: "#7E3BF2" },
      ],
      chart: {
        sparkline: { enabled: false },
        height: "100%",
        width: "100%",
        type: "area",
        fontFamily: "Inter, sans-serif",
        dropShadow: { enabled: false },
        toolbar: { show: false },
      },
      tooltip: {
        enabled: true,
        x: { show: false },
      },
      fill: {
        type: "gradient",
        gradient: {
          opacityFrom: 0.55,
          opacityTo: 0,
          shade: "dark",
          gradientToColors: ["#1C64F2"],
        },
      },
      dataLabels: { enabled: false },
      stroke: { width: 6 },
      legend: { show: false },
      grid: { show: false },
    };

    const chartElement = document.getElementById("labels-chart") as HTMLElement;
    if (chartElement) {
      this.chart = new ApexCharts(chartElement, options);
      this.chart.render();
    }
  }

  ngOnDestroy(): void {
    if (this.chart) {
      this.chart.destroy(); // Clean up the chart instance on component destruction
    }
  }
}
