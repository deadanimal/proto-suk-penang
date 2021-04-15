import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { AuthService } from "src/app/shared/services/auth/auth.service";

import { NotifyService } from "src/app/shared/handler/notify/notify.service";
import { LoadingBarService } from "@ngx-loading-bar/core";

import * as moment from "moment";
import * as xlsx from "xlsx";
import swal from "sweetalert2";

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

  // Table
  entries: number = 5;
  selected: any[] = [];
  temp = [];
  activeRow: any;
  rows: any = [
    {
      name: "Tiger Nixon",
      position: "System Architect",
      coreparent: "GN"
    },
    {
      name: "Garrett Winters",
      position: "Accountant",
      coreparent: "GN"
    },
    {
      name: "Ashton Cox",
      position: "Junior Technical Author",
      coreparent: "GN"
    },
    {
      name: "Cedric Kelly",
      position: "Senior Javascript Developer",
      coreparent: "FN"
    },
    {
      name: "Airi Satou",
      position: "Accountant",
      coreparent: "FN"
    },
    {
      name: "Brielle Williamson",
      position: "Integration Specialist",
      coreparent: "GN"
    },
    {
      name: "Herrod Chandler",
      position: "Sales Assistant",
      coreparent: "FN"
    },
    {
      name: "Rhona Davidson",
      position: "Integration Specialist",
      coreparent: "GN"
    },
    {
      name: "Colleen Hurst",
      position: "Javascript Developer",
      coreparent: "GN"
    },
    {
      name: "Sonya Frost",
      position: "Software Engineer",
      coreparent: "FN"
    },
    {
      name: "Jena Gaines",
      position: "Office Manager",
      coreparent: "FN"
    },
    {
      name: "Quinn Flynn",
      position: "Support Lead",
      coreparent: "FN"
    },
    {
      name: "Charde Marshall",
      position: "Regional Director",
      coreparent: "FN"
    },
    {
      name: "Haley Kennedy",
      position: "Senior Marketing Designer",
      coreparent: "GN"
    },
    {
      name: "Tatyana Fitzpatrick",
      position: "Regional Director",
      coreparent: "FN"
    }
  ]
  SelectionType = SelectionType;
  
  // Checker
  isEmpty: boolean = true
  isRegister: boolean = false
  isSummaryTableHidden: boolean = true
  
  // Icon
  iconEmpty = 'assets/img/icons/box.svg'

  // Form
  analysisForm: FormGroup
  analysisService: any;
  // tableTemp: any;
  // tableRows: any;
  // tableSelected: any;
  // tableActiveRow: any;

  constructor(
    private fb: FormBuilder,
    private loadingBar: LoadingBarService,
    private notifyService: NotifyService
  ) {
    this.temp = this.rows.map((prop, key) => {
      return {
        ...prop,
        id: key
      };
    });
  }

  ngOnInit() {
    this.initForm()
  }

  initForm() {
    this.analysisForm = this.fb.group({
      staff: new FormControl(null, Validators.compose([
        Validators.required
      ])),
      core: new FormControl(null, Validators.compose([
        Validators.required
      ])),
      suggested_title: new FormControl(null, Validators.compose([
        Validators.required
      ])),
      suggested_facilitator: new FormControl(null, Validators.compose([
        Validators.required
      ])),
    })
  }

  confirm() {
    swal.fire({
      title: 'Pengesahan',
      text: 'Anda pasti untuk mendaftar keperluan latihan ini?',
      type: 'info',
      buttonsStyling: false,
      showCancelButton: true,
      confirmButtonClass: 'btn btn-info',
      confirmButtonText: 'Pasti',
      cancelButtonClass: 'btn btn-outline-info',
      cancelButtonText: 'Batal'
    }).then((result) => {
      if (result.value) {
        this.add()
      }
    })
  }

  add() {
    this.loadingBar.start()
    let infoTitle = 'Sedang proses'
    let infoMessage = 'Keperluan latihan sedang ditambah'
    this.notifyService.openToastrInfo(infoTitle, infoMessage)
    // console.log(this.analysisForm.value)
    this.analysisService.post(this.analysisForm.value).subscribe(
      () => {
        this.loadingBar.complete()
      },
      () => {
        let title = 'Tidak berjaya'
        let message = 'Anda tidak berjaya untuk menambah keperluan latihan. Sila cuba sekali lagi'
        this.notifyService.openToastrError(title, message)
        this.loadingBar.complete()
      },
      () => {
        let title = 'Berjaya'
        let message = 'Keperluan latihan berjaya ditambah.'
        this.notifyService.openToastr(title, message)
        this.success()
      }
    )
  }

  success() {
    swal.fire({
      title: 'Berjaya',
      text: 'Peperiksaan telah ditambah. Tambah lagi?',
      type: 'success',
      buttonsStyling: false,
      showCancelButton: true,
      confirmButtonClass: 'btn btn-success',
      confirmButtonText: 'Tambah',
      cancelButtonClass: 'btn btn-success-info',
      cancelButtonText: 'Tidak'
    }).then((result) => {
      if (result.value) {
        this.analysisForm.reset()
        this.initForm()
      }
      else {
        // this.isRegister = false
        this.initForm()
      }
    })
  }

  enableRegister() {
    // this.isRegister = true
  }

  disableRegister() {
    // this.isRegister = false
  }

  entriesChange($event) {
    this.entries = $event.target.value;
  }

  filterTable($event) {
    let val = $event.target.value;
    this.temp = this.rows.filter(function(d) {
      for (var key in d) {
        if (d[key].toLowerCase().indexOf(val) !== -1) {
          return true;
        }
      }
      return false;
    });
  }

  onSelect({ selected }) {
    this.selected.splice(0, this.selected.length);
    this.selected.push(...selected);
  }

  onActivate(event) {
    this.activeRow = event.row;
  }


  exportExcel() {
    let todayDate = new Date()
    let todayDateFormat = moment(todayDate).format('YYYYMMDD')
    let fileName = 'Senarai_Keperluan_Latihan_Yang_Telah_Dibuat_' + todayDateFormat + '.xlsx'
    let element = document.getElementById('summaryTable'); 
    const ws: xlsx.WorkSheet = xlsx.utils.table_to_sheet(element);

    /* generate workbook and add the worksheet */
    const wb: xlsx.WorkBook = xlsx.utils.book_new();
    xlsx.utils.book_append_sheet(wb, ws, 'Sheet1');

    /* save to file */
    xlsx.writeFile(wb, fileName);
  }
}
