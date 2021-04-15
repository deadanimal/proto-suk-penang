import { Component, NgZone, OnInit } from "@angular/core";
import { forkJoin } from "rxjs";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { NotifyService } from "src/app/shared/handler/notify/notify.service";
import { LoadingBarService } from "@ngx-loading-bar/core";

import { User } from "src/app/shared/services/users/users.model";
import { AuthService } from "src/app/shared/services/auth/auth.service";

import swal from "sweetalert2";
import * as moment from "moment";
import * as xlsx from "xlsx";

import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import am4themes_kelly from "@amcharts/amcharts4/themes/kelly";

export enum SelectionType {
  single = "single",
  multi = "multi",
  multiClick = "multiClick",
  cell = "cell",
  checkbox = "checkbox",
}

@Component({
  selector: "app-need-analysis",
  templateUrl: "./need-analysis.component.html",
  styleUrls: ["./need-analysis.component.scss"],
})
export class NeedAnalysisComponent implements OnInit {
  currentUser: User;
  statistics;

  private chart1:any


  // Table
  entries: number = 5;
  tableSelected: any[] = [];
  temp = [];
  activeRow: any;
  rows: any = [
      {
        name: "Tiger Nixon",
        position: "System Architect",
        office: "Edinburgh",
        age: "61",
        start: "2011/04/25",
        organiser_type:"LL",
      },
      {
        name: "Garrett Winters",
        position: "Accountant",
        office: "Tokyo",
        age: "63",
        start: "2011/07/25",
        salary: "$170,750",
        organiser_type:"LL",
      },
      {
        name: "Ashton Cox",
        position: "Junior Technical Author",
        office: "San Francisco",
        age: "66",
        start: "2009/01/12",
        salary: "$86,000",
        organiser_type:"DD",
      },
      {
        name: "Cedric Kelly",
        position: "Senior Javascript Developer",
        office: "Edinburgh",
        age: "22",
        start: "2012/03/29",
        salary: "$433,060",
        organiser_type:"LL",
      },
      {
        name: "Airi Satou",
        position: "Accountant",
        office: "Tokyo",
        age: "33",
        start: "2008/11/28",
        salary: "$162,700",
        organiser_type:"DD",
      },
      {
        name: "Brielle Williamson",
        position: "Integration Specialist",
        office: "New York",
        age: "61",
        start: "2012/12/02",
        salary: "$372,000",
        organiser_type:"DD",
      },
      {
        name: "Herrod Chandler",
        position: "Sales Assistant",
        office: "San Francisco",
        age: "59",
        start: "2012/08/06",
        salary: "$137,500",
        organiser_type:"DD",
      },
      {
        name: "Rhona Davidson",
        position: "Integration Specialist",
        office: "Tokyo",
        age: "55",
        start: "2010/10/14",
        salary: "$327,900",
        organiser_type:"LL",
      },
      {
        name: "Colleen Hurst",
        position: "Javascript Developer",
        office: "San Francisco",
        age: "39",
        start: "2009/09/15",
        salary: "$205,500",
        organiser_type:"LL",
      },
      {
        name: "Sonya Frost",
        position: "Software Engineer",
        office: "Edinburgh",
        age: "23",
        start: "2008/12/13",
        salary: "$103,600",
        organiser_type:"DD",
      },
      {
        name: "Jena Gaines",
        position: "Office Manager",
        office: "London",
        age: "30",
        start: "2008/12/19",
        salary: "$90,560",
        organiser_type:"LL",
      },
      {
        name: "Quinn Flynn",
        position: "Support Lead",
        office: "Edinburgh",
        age: "22",
        start: "2013/03/03",
        salary: "$342,000",
      },
      {
        name: "Charde Marshall",
        position: "Regional Director",
        office: "San Francisco",
        age: "36",
        start: "2008/10/16",
        salary: "$470,600",
      },
      {
        name: "Haley Kennedy",
        position: "Senior Marketing Designer",
        office: "London",
        age: "43",
        start: "2012/12/18",
        salary: "$313,500",
      },
      {
        name: "Tatyana Fitzpatrick",
        position: "Regional Director",
        office: "London",
        age: "19",
        start: "2010/03/17",
        salary: "$385,750",
      }
  ];
  SelectionType = SelectionType;

  // Checker
  isEmpty: boolean = true;
  isRegister: boolean = false;
  isSummaryTableHidden: boolean = true;
  // Icon
  iconEmpty = "assets/img/icons/box.svg";

  // Form
  analysisForm: FormGroup;


  constructor(
    private authService: AuthService,
    private fb: FormBuilder,
    private loadingBar: LoadingBarService,
    private notifyService: NotifyService,
    private zone: NgZone
  ) {}

  ngOnInit() {
    this.initForm();
    this.getCharts()
  }

  ngOnDestroy() {
    this.zone.runOutsideAngular(() => {
      if (this.chart1) {
        this.chart1.dispose();
      }
    });
  }

  initForm() {
    this.analysisForm = this.fb.group({
      staff: new FormControl(null, Validators.compose([Validators.required])),
      core: new FormControl(null, Validators.compose([Validators.required])),
      suggested_title: new FormControl(
        null,
        Validators.compose([Validators.required])
      ),
      suggested_facilitator: new FormControl(
        null,
        Validators.compose([Validators.required])
      ),
    });
  }

  confirm() {
    swal
      .fire({
        title: "Pengesahan",
        text: "Anda pasti untuk mendaftar keperluan latihan ini?",
        type: "info",
        buttonsStyling: false,
        showCancelButton: true,
        confirmButtonClass: "btn btn-info",
        confirmButtonText: "Pasti",
        cancelButtonClass: "btn btn-outline-info",
        cancelButtonText: "Batal",
      })
      .then((result) => {
        if (result.value) {
          this.add();
        }
      });
  }

  add() {
    this.loadingBar.start();
    let infoTitle = "Sedang proses";
    let infoMessage = "Keperluan latihan sedang ditambah";
    this.notifyService.openToastrInfo(infoTitle, infoMessage);
    // console.log(this.analysisForm.value)
  }

  success() {
    swal
      .fire({
        title: "Berjaya",
        text: "Peperiksaan telah ditambah. Tambah lagi?",
        type: "success",
        buttonsStyling: false,
        showCancelButton: true,
        confirmButtonClass: "btn btn-success",
        confirmButtonText: "Tambah",
        cancelButtonClass: "btn btn-success-info",
        cancelButtonText: "Tidak",
      })
      .then((result) => {
        if (result.value) {
          this.analysisForm.reset();
          this.initForm();
        } else {
          this.isRegister = false;
          this.initForm();
        }
      });
  }

  enableRegister() {
    this.isRegister = true;
  }

  disableRegister() {
    this.isRegister = false;
  }

  entriesChange($event) {
    this.entries = $event.target.value;
  }

  filterTable($event) {
    let val = $event.target.value.toLowerCase();
    this.temp = this.rows.filter(function (d) {
      return d.title.toLowerCase().indexOf(val) !== -1 || !val;
    });
  }

  onSelect({ selected }) {
    this.tableSelected.splice(0, this.tableSelected.length);
    this.tableSelected.push(...selected);
  }

  onActivate(event) {
    this.activeRow = event.row;
  }

  getCharts() {
    this.zone.runOutsideAngular(() => {
      this.getChart1();
    });
  }

  getChart1() {
    // Themes begin
    am4core.useTheme(am4themes_kelly);
    am4core.useTheme(am4themes_animated);
    // Themes end

    let container = am4core.create("tcna1", am4core.Container);
    container.width = am4core.percent(100);
    container.height = am4core.percent(100);
    container.layout = "horizontal";

    let chart = container.createChild(am4charts.PieChart);

    // Add data
    chart.data = [
      {
        country: "Lithuania",
        litres: 500,
        subData: [
          { name: "A", value: 200 },
          { name: "B", value: 150 },
          { name: "C", value: 100 },
          { name: "D", value: 50 },
        ],
      },
      {
        country: "Czech Republic",
        litres: 300,
        subData: [
          { name: "A", value: 150 },
          { name: "B", value: 100 },
          { name: "C", value: 50 },
        ],
      },
      {
        country: "Ireland",
        litres: 200,
        subData: [
          { name: "A", value: 110 },
          { name: "B", value: 60 },
          { name: "C", value: 30 },
        ],
      },
      {
        country: "Germany",
        litres: 150,
        subData: [
          { name: "A", value: 80 },
          { name: "B", value: 40 },
          { name: "C", value: 30 },
        ],
      },
      {
        country: "Australia",
        litres: 140,
        subData: [
          { name: "A", value: 90 },
          { name: "B", value: 40 },
          { name: "C", value: 10 },
        ],
      },
      {
        country: "Austria",
        litres: 120,
        subData: [
          { name: "A", value: 60 },
          { name: "B", value: 30 },
          { name: "C", value: 30 },
        ],
      },
    ];

    // Add and configure Series
    let pieSeries = chart.series.push(new am4charts.PieSeries());
    pieSeries.dataFields.value = "litres";
    pieSeries.dataFields.category = "country";
    pieSeries.slices.template.states.getKey(
      "active"
    ).properties.shiftRadius = 0;
    //pieSeries.labels.template.text = "{category}\n{value.percent.formatNumber('#.#')}%";

    pieSeries.slices.template.events.on("hit", function (event) {
      selectSlice(event.target.dataItem);
    });

    let chart2 = container.createChild(am4charts.PieChart);
    chart2.width = am4core.percent(30);
    chart2.radius = am4core.percent(80);

    // Add and configure Series
    let pieSeries2 = chart2.series.push(new am4charts.PieSeries());
    pieSeries2.dataFields.value = "value";
    pieSeries2.dataFields.category = "name";
    pieSeries2.slices.template.states.getKey(
      "active"
    ).properties.shiftRadius = 0;
    //pieSeries2.labels.template.radius = am4core.percent(50);
    //pieSeries2.labels.template.inside = true;
    //pieSeries2.labels.template.fill = am4core.color("#ffffff");
    pieSeries2.labels.template.disabled = true;
    pieSeries2.ticks.template.disabled = true;
    pieSeries2.alignLabels = false;
    pieSeries2.events.on("positionchanged", updateLines);

    let interfaceColors = new am4core.InterfaceColorSet();

    let line1 = container.createChild(am4core.Line);
    line1.strokeDasharray = "2,2";
    line1.strokeOpacity = 0.5;
    line1.stroke = interfaceColors.getFor("alternativeBackground");
    line1.isMeasured = false;

    let line2 = container.createChild(am4core.Line);
    line2.strokeDasharray = "2,2";
    line2.strokeOpacity = 0.5;
    line2.stroke = interfaceColors.getFor("alternativeBackground");
    line2.isMeasured = false;

    let selectedSlice;

    function selectSlice(dataItem) {
      selectedSlice = dataItem.slice;

      let fill = selectedSlice.fill;

      let count = dataItem.dataContext.subData.length;
      pieSeries2.colors.list = [];
      for (var i = 0; i < count; i++) {
        pieSeries2.colors.list.push(fill.brighten((i * 2) / count));
      }

      chart2.data = dataItem.dataContext.subData;
      pieSeries2.appear();

      let middleAngle = selectedSlice.middleAngle;
      let firstAngle = pieSeries.slices.getIndex(0).startAngle;
      let animation = pieSeries.animate(
        [
          { property: "startAngle", to: firstAngle - middleAngle },
          { property: "endAngle", to: firstAngle - middleAngle + 360 },
        ],
        600,
        am4core.ease.sinOut
      );
      animation.events.on("animationprogress", updateLines);

      selectedSlice.events.on("transformed", updateLines);

      //  var animation = chart2.animate({property:"dx", from:-container.pixelWidth / 2, to:0}, 2000, am4core.ease.elasticOut)
      //  animation.events.on("animationprogress", updateLines)
    }

    function updateLines() {
      if (selectedSlice) {
        let p11 = {
          x: selectedSlice.radius * am4core.math.cos(selectedSlice.startAngle),
          y: selectedSlice.radius * am4core.math.sin(selectedSlice.startAngle),
        };
        let p12 = {
          x:
            selectedSlice.radius *
            am4core.math.cos(selectedSlice.startAngle + selectedSlice.arc),
          y:
            selectedSlice.radius *
            am4core.math.sin(selectedSlice.startAngle + selectedSlice.arc),
        };

        p11 = am4core.utils.spritePointToSvg(p11, selectedSlice);
        p12 = am4core.utils.spritePointToSvg(p12, selectedSlice);

        let p21 = { x: 0, y: -pieSeries2.pixelRadius };
        let p22 = { x: 0, y: pieSeries2.pixelRadius };

        p21 = am4core.utils.spritePointToSvg(p21, pieSeries2);
        p22 = am4core.utils.spritePointToSvg(p22, pieSeries2);

        line1.x1 = p11.x;
        line1.x2 = p21.x;
        line1.y1 = p11.y;
        line1.y2 = p21.y;

        line2.x1 = p12.x;
        line2.x2 = p22.x;
        line2.y1 = p12.y;
        line2.y2 = p22.y;
      }
    }

    chart.events.on("datavalidated", function () {
      setTimeout(function () {
        selectSlice(pieSeries.dataItems.getIndex(0));
      }, 1000);
    });
  }

  exportExcel() {
    let todayDate = new Date();
    let todayDateFormat = moment(todayDate).format("YYYYMMDD");
    let fileName =
      "Ringkasan_Analisa_Keperluan_Latihan_" + todayDateFormat + ".xlsx";
    let element = document.getElementById("summaryTable");
    const ws: xlsx.WorkSheet = xlsx.utils.table_to_sheet(element);

    /* generate workbook and add the worksheet */
    const wb: xlsx.WorkBook = xlsx.utils.book_new();
    xlsx.utils.book_append_sheet(wb, ws, "Sheet1");

    /* save to file */
    xlsx.writeFile(wb, fileName);
  }
}
