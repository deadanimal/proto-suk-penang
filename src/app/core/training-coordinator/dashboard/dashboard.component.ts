import { Component, NgZone, OnInit } from '@angular/core';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  // Chart
  chart1: any // Kehadiran Kursus Mengikut Jabatan
  chart2: any // Jabatan Mencapai 5 Hari Berkursus

  constructor(
    private zone: NgZone
  ) { }

  ngOnInit() {
    this.getCharts()
  }

  ngOnDestroy() {
    this.zone.runOutsideAngular(
      () => {
        if (this.chart1) {
          console.log('Chart disposed')
          this.chart1.dispose()
        }
        if (this.chart2) {
          console.log('Chart disposed')
          this.chart2.dispose()
        }
      }
    )
  }

  getCharts() {
    this.zone.runOutsideAngular(() => {
      this.getChart1()
      this.getChart2()
    })
  }

  getChart1() {
    // Themes begin
    am4core.useTheme(am4themes_animated);
    // Themes end

    // Create chart instance
    let chart = am4core.create("dtc1", am4charts.XYChart3D);

    // Add data
    chart.data = [{
      "country": "JABATAN 1",
      "visits": 4025
    }, {
      "country": "JABATAN 2",
      "visits": 1882
    }, {
      "country": "JABATAN 3",
      "visits": 1809
    }, {
      "country": "JABATAN 4",
      "visits": 1322
    }, {
      "country": "JABATAN 5",
      "visits": 1122
    }, {
      "country": "JABATAN 6",
      "visits": 1114
    }, {
      "country": "JABATAN 7",
      "visits": 984
    }, {
      "country": "JABATAN 8",
      "visits": 711
    }, {
      "country": "JABATAN 9",
      "visits": 665
    }, {
      "country": "JABATAN 10",
      "visits": 580
    }, {
      "country": "JABATAN 11",
      "visits": 443
    }, {
      "country": "JABATAN 12",
      "visits": 441
    }, {
      "country": "JABATAN 13",
      "visits": 395
    }, {
      "country": "JABATAN 14",
      "visits": 386
    }, {
      "country": "JABATAN 15",
      "visits": 384
    }, {
      "country": "JABATAN 16",
      "visits": 338
    }, {
      "country": "JABATAN 17",
      "visits": 328
    }];

    // Create axes
    let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "country";
    categoryAxis.renderer.labels.template.rotation = 270;
    categoryAxis.renderer.labels.template.hideOversized = false;
    categoryAxis.renderer.minGridDistance = 20;
    categoryAxis.renderer.labels.template.horizontalCenter = "right";
    categoryAxis.renderer.labels.template.verticalCenter = "middle";
    categoryAxis.tooltip.label.rotation = 270;
    categoryAxis.tooltip.label.horizontalCenter = "right";
    categoryAxis.tooltip.label.verticalCenter = "middle";

    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.title.text = "Jabatan";
    valueAxis.title.fontWeight = "bold";

    // Create series
    let series = chart.series.push(new am4charts.ColumnSeries3D());
    series.dataFields.valueY = "visits";
    series.dataFields.categoryX = "country";
    series.name = "Visits";
    series.tooltipText = "{categoryX}: [bold]{valueY}[/]";
    series.columns.template.fillOpacity = .8;

    let columnTemplate = series.columns.template;
    columnTemplate.strokeWidth = 2;
    columnTemplate.strokeOpacity = 1;
    columnTemplate.stroke = am4core.color("#FFFFFF");

    columnTemplate.adapter.add("fill", function (fill, target) {
      return chart.colors.getIndex(target.dataItem.index);
    })

    columnTemplate.adapter.add("stroke", function (stroke, target) {
      return chart.colors.getIndex(target.dataItem.index);
    })

    chart.cursor = new am4charts.XYCursor();
    chart.cursor.lineX.strokeOpacity = 0;
    chart.cursor.lineY.strokeOpacity = 0;

    this.chart1 = chart;
  }

  getChart2() {
    // Themes begin
    am4core.useTheme(am4themes_animated);
    // Themes end

    let chart = am4core.create("dtc2", am4charts.PieChart3D);
    chart.hiddenState.properties.opacity = 0; // this creates initial fade-in

    chart.legend = new am4charts.Legend();

    chart.data = [
      {
        country: "JABATAN 1",
        litres: 501.9
      },
      {
        country: "JABATAN 2",
        litres: 301.9
      },
      {
        country: "JABATAN 3",
        litres: 201.1
      },
      {
        country: "JABATAN 4",
        litres: 165.8
      },
      {
        country: "JABATAN 5",
        litres: 139.9
      },
      {
        country: "JABATAN 6",
        litres: 128.3
      },
      {
        country: "JABATAN 7",
        litres: 99
      },
      {
        country: "JABATAN 8",
        litres: 60
      },
      {
        country: "JABATAN 9",
        litres: 50
      }
    ];

    let series = chart.series.push(new am4charts.PieSeries3D());
    series.dataFields.value = "litres";
    series.dataFields.category = "country";

    this.chart2 = chart;
  }

}
