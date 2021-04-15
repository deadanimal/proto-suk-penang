import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { LoadingBarService } from '@ngx-loading-bar/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { forkJoin } from 'rxjs';
import { NotifyService } from 'src/app/shared/handler/notify/notify.service';
import { User } from 'src/app/shared/services/users/users.model';
import { UsersService } from 'src/app/shared/services/users/users.service';

import swal from 'sweetalert2';
import * as moment from 'moment';
import * as xlsx from 'xlsx';

export enum SelectionType {
  single = 'single',
  multi = 'multi',
  multiClick = 'multiClick',
  cell = 'cell',
  checkbox = 'checkbox'
}

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  selectedUser: User
  userForm: FormGroup
  // Table
  tableEntries: number = 5
  tableSelected: any[] = []
  tableTemp = []
  tableActiveRow: any
  tableRows: any = [
    {
      name: "Tiger Nixon",
      position: "System Architect",
      office: "Edinburgh",
      age: "61",
      start: "2011/04/25",
      salary: "$320,800",
      status: "DB",
    },
    {
      name: "Garrett Winters",
      position: "Accountant",
      office: "Tokyo",
      age: "63",
      start: "2011/07/25",
      salary: "$170,750",
      status: "DB",
    },
    {
      name: "Ashton Cox",
      position: "Junior Technical Author",
      office: "San Francisco",
      age: "66",
      start: "2009/01/12",
      salary: "$86,000",
      status: "OT",
    },
    {
      name: "Cedric Kelly",
      position: "Senior Javascript Developer",
      office: "Edinburgh",
      age: "22",
      start: "2012/03/29",
      salary: "$433,060",
      status: "DB",
    },
    {
      name: "Airi Satou",
      position: "Accountant",
      office: "Tokyo",
      age: "33",
      start: "2008/11/28",
      salary: "$162,700",
      status: "PN",
    },
    {
      name: "Brielle Williamson",
      position: "Integration Specialist",
      office: "New York",
      age: "61",
      start: "2012/12/02",
      salary: "$372,000",
      status: "SL",
    },
    {
      name: "Herrod Chandler",
      position: "Sales Assistant",
      office: "San Francisco",
      age: "59",
      start: "2012/08/06",
      salary: "$137,500",
      status: "DB",
    },
    {
      name: "Rhona Davidson",
      position: "Integration Specialist",
      office: "Tokyo",
      age: "55",
      start: "2010/10/14",
      salary: "$327,900",
      status: "DB",
    },
    {
      name: "Colleen Hurst",
      position: "Javascript Developer",
      office: "San Francisco",
      age: "39",
      start: "2009/09/15",
      salary: "$205,500",
      status: "DT",
    },
    {
      name: "Sonya Frost",
      position: "Software Engineer",
      office: "Edinburgh",
      age: "23",
      start: "2008/12/13",
      salary: "$103,600",
      status: "SL",
    },
    {
      name: "Jena Gaines",
      position: "Office Manager",
      office: "London",
      age: "30",
      start: "2008/12/19",
      salary: "$90,560",
      status: "DT",
    },
    {
      name: "Quinn Flynn",
      position: "Support Lead",
      office: "Edinburgh",
      age: "22",
      start: "2013/03/03",
      salary: "$342,000",
      status: "DT",
    },
    {
      name: "Charde Marshall",
      position: "Regional Director",
      office: "San Francisco",
      age: "36",
      start: "2008/10/16",
      salary: "$470,600",
      status: "TN",
    },
    {
      name: "Haley Kennedy",
      position: "Senior Marketing Designer",
      office: "London",
      age: "43",
      start: "2012/12/18",
      salary: "$313,500",
      status: "DB",
    },
    {
      name: "Tatyana Fitzpatrick",
      position: "Regional Director",
      office: "London",
      age: "19",
      start: "2010/03/17",
      salary: "$385,750",
      status: "OT",
    },
    {
      name: "Michael Silva",
      position: "Marketing Designer",
      office: "London",
      age: "66",
      start: "2012/11/27",
      salary: "$198,500",
      status: "OT",
    },
    {
      name: "Paul Byrd",
      position: "Chief Financial Officer (CFO)",
      office: "New York",
      age: "64",
      start: "2010/06/09",
      salary: "$725,000",
    },
    {
      name: "Gloria Little",
      position: "Systems Administrator",
      office: "New York",
      age: "59",
      start: "2009/04/10",
      salary: "$237,500",
    },
    {
      name: "Bradley Greer",
      position: "Software Engineer",
      office: "London",
      age: "41",
      start: "2012/10/13",
      salary: "$132,000",
    },
    {
      name: "Dai Rios",
      position: "Personnel Lead",
      office: "Edinburgh",
      age: "35",
      start: "2012/09/26",
      salary: "$217,500",
    },
    {
      name: "Jenette Caldwell",
      position: "Development Lead",
      office: "New York",
      age: "30",
      start: "2011/09/03",
      salary: "$345,000",
    },
    {
      name: "Yuri Berry",
      position: "Chief Marketing Officer (CMO)",
      office: "New York",
      age: "40",
      start: "2009/06/25",
      salary: "$675,000",
    },
    {
      name: "Caesar Vance",
      position: "Pre-Sales Support",
      office: "New York",
      age: "21",
      start: "2011/12/12",
      salary: "$106,450",
    }
  ]
  SelectionType = SelectionType;

  // Checker
  isEmpty: boolean = true

  // Modal
  modal: BsModalRef;
  modalConfig = {
    keyboard: true,
    class: 'modal-dialog-centered'
  };

  // Icon
  iconEmpty = 'assets/img/icons/box.svg'

  constructor(
    private userService: UsersService,
    private fb: FormBuilder,
    private loadingBar: LoadingBarService,
    private modalService: BsModalService,
    private notifyService: NotifyService,
  ) { }

  ngOnInit() {
    this.initForm()
  }

  initForm() {
    this.userForm = this.fb.group({
      user_type: new FormControl(null, Validators.compose([
        Validators.required
      ]))
    })
  }

  entriesChange($event) {
    this.tableEntries = $event.target.value;
  }

  filterTable($event, type) {
    let val = $event.target.value.toLowerCase();
    if (type == 'name') {
      this.tableTemp = this.tableRows.filter(function (d) {
        return d.full_name.toLowerCase().indexOf(val) !== -1 || !val;
      });
    }
    else if (type == 'user_type') {
      if (val == 'aa') {
        this.tableTemp = this.tableRows
      }
      else {
        this.tableTemp = this.tableRows.filter(function (d) {
          return d.user_type.toLowerCase().indexOf(val) !== -1 || !val;
        });
      }
    }
  }

  onSelect({ selected }) {
    this.tableSelected.splice(0, this.tableSelected.length);
    this.tableSelected.push(...selected);
  }

  onActivate(event) {
    this.tableActiveRow = event.row;
  }

  patch() {
    this.loadingBar.start()
    let infoTitle = 'Sedang proses'
    let infoMessage = 'Pengguna sedang dikemaskini'
    this.notifyService.openToastrInfo(infoTitle, infoMessage)

    this.userService.update(this.selectedUser['id'], this.userForm.value).subscribe(
      () => {
        this.loadingBar.complete()
      },
      () => {
        this.loadingBar.complete()
        let title = 'Tidak berjaya'
        let message = 'Anda tidak berjaya untuk mengemaskini pengguna. Sila cuba sekali lagi'
        this.notifyService.openToastrError(title, message)
        this.closeModal()
      },
      () => {
        let title = 'Berjaya'
        let message = 'Pengguna berjaya dikemaskini.'
        this.notifyService.openToastr(title, message)
        this.success()
        this.closeModal()
      }
    )
  }

  openModal(modalRef: TemplateRef<any>, row) {
    this.selectedUser = row
    this.userForm.controls['user_type'].setValue(this.selectedUser['user_type'])

    this.modal = this.modalService.show(modalRef, this.modalConfig);
    // console.log('Wee', this.userForm.value)
  }

  closeModal() {
    this.modal.hide()
    this.userForm.reset()
  }

  confirm() {
    // console.log('Wee', this.examForm.value)
    swal.fire({
      title: 'Pengesahan',
      text: 'Anda pasti untuk mengemaskini pengguna ini?',
      type: 'info',
      buttonsStyling: false,
      showCancelButton: true,
      confirmButtonClass: 'btn btn-info',
      confirmButtonText: 'Pasti',
      cancelButtonClass: 'btn btn-outline-info',
      cancelButtonText: 'Batal'
    }).then((result) => {
      if (result.value) {
        this.patch()
      }
    })
  }

  success() {
    swal.fire({
      title: 'Berjaya',
      text: 'Pengguna berjaya dikemaskini',
      type: 'success',
      buttonsStyling: false,
      showCancelButton: true,
      showConfirmButton: false,
      cancelButtonClass: 'btn btn-outline-success',
      cancelButtonText: 'Tutup'
    })
  }

  exportExcel() {
    let todayDate = new Date()
    let todayDateFormat = moment(todayDate).format('YYYYMMDD')
    let fileName = 'Ringkasan_Pengguna_' + todayDateFormat + '.xlsx'
    let element = document.getElementById('summaryTable'); 
    const ws: xlsx.WorkSheet = xlsx.utils.table_to_sheet(element);

    /* generate workbook and add the worksheet */
    const wb: xlsx.WorkBook = xlsx.utils.book_new();
    xlsx.utils.book_append_sheet(wb, ws, 'Sheet1');

    /* save to file */
    xlsx.writeFile(wb, fileName);
  }

}
