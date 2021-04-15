import { TemplateRef } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { LoadingBarService } from '@ngx-loading-bar/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import swal from 'sweetalert2';

export enum SelectionType {
  single = "single",
  multi = "multi",
  multiClick = "multiClick",
  cell = "cell",
  checkbox = "checkbox",
}

@Component({
  selector: 'app-exams',
  templateUrl: './exams.component.html',
  styleUrls: ['./exams.component.scss']
})
export class ExamsComponent implements OnInit {

  // Datepicker
  dateValue: Date
  dateConfig = { 
    isAnimated: true, 
    dateInputFormate: 'YYYY-MM-DDTHH:mm:ss.SSSSZ',
    containerClass: 'theme-dark-blue modal-lg' 
  }

  // Choices
  choicesResult = [
    { text: 'LULUS', value: 'PA' },
    { text: 'GAGAL', value: 'FA' }
  ]
  choicesType = [
    { text: 'FAEDAH KEWANGAN', value: 'FKW' },
    { text: 'PENGESAHAN DALAM PERKHIDMATAN', value: 'PDP' },
    { text: 'PEPERIKSAAN PENINGKATAN SECARA LANTIKAN (PSL)', value: 'PSL' }
  ]

  // Modal
  modal: BsModalRef;

  // File
  fileName
  fileSize
  fileNameInformation
  fileSizeInformation

  //table 
  entries: number = 5;
  selected: any[] = [];
  temp = [];
  activeRow: any;
  rows: any = [
    {
      name: "Tiger Nixon",
      position: "System Architect",
      office: "Edinburgh",
      age: "61",
      start: "2011/04/25",
      active:"y",
    },
    {
      name: "Garrett Winters",
      position: "Accountant",
      office: "Tokyo",
      age: "63",
      start: "2011/07/25",
      salary: "$170,750",
      active:"y",
    },
    {
      name: "Ashton Cox",
      position: "Junior Technical Author",
      office: "San Francisco",
      age: "66",
      start: "2009/01/12",
      salary: "$86,000",
      active:"n",
    },
    {
      name: "Cedric Kelly",
      position: "Senior Javascript Developer",
      office: "Edinburgh",
      age: "22",
      start: "2012/03/29",
      salary: "$433,060",
      active:"y",
    },
    {
      name: "Airi Satou",
      position: "Accountant",
      office: "Tokyo",
      age: "33",
      start: "2008/11/28",
      salary: "$162,700",
      active:"y",
    },
    {
      name: "Brielle Williamson",
      position: "Integration Specialist",
      office: "New York",
      age: "61",
      start: "2012/12/02",
      salary: "$372,000",
      active:"y",
    },
    {
      name: "Herrod Chandler",
      position: "Sales Assistant",
      office: "San Francisco",
      age: "59",
      start: "2012/08/06",
      salary: "$137,500",
      active:"n",
    },
    {
      name: "Rhona Davidson",
      position: "Integration Specialist",
      office: "Tokyo",
      age: "55",
      start: "2010/10/14",
      salary: "$327,900",
      active:"n",
    },
    {
      name: "Colleen Hurst",
      position: "Javascript Developer",
      office: "San Francisco",
      age: "39",
      start: "2009/09/15",
      salary: "$205,500",
      active:"y",
    },
    {
      name: "Sonya Frost",
      position: "Software Engineer",
      office: "Edinburgh",
      age: "23",
      start: "2008/12/13",
      salary: "$103,600",
      active:"y",
    },
    {
      name: "Jena Gaines",
      position: "Office Manager",
      office: "London",
      age: "30",
      start: "2008/12/19",
      salary: "$90,560",
      active:"n",
    },
    {
      name: "Quinn Flynn",
      position: "Support Lead",
      office: "Edinburgh",
      age: "22",
      start: "2013/03/03",
      salary: "$342,000",
      active:"n",

    },
    {
      name: "Charde Marshall",
      position: "Regional Director",
      office: "San Francisco",
      age: "36",
      start: "2008/10/16",
      salary: "$470,600",
      active:"y",

    },
    {
      name: "Haley Kennedy",
      position: "Senior Marketing Designer",
      office: "London",
      age: "43",
      start: "2012/12/18",
      salary: "$313,500",
      active:"y",

    },
    {
      name: "Tatyana Fitzpatrick",
      position: "Regional Director",
      office: "London",
      age: "19",
      start: "2010/03/17",
      salary: "$385,750",
      active:"n",

    },
    {
      name: "Michael Silva",
      position: "Marketing Designer",
      office: "London",
      age: "66",
      start: "2012/11/27",
      salary: "$198,500",
      active:"n",

    },
    {
      name: "Paul Byrd",
      position: "Chief Financial Officer (CFO)",
      office: "New York",
      age: "64",
      start: "2010/06/09",
      salary: "$725,000",
      active:"n",

    },
    {
      name: "Gloria Little",
      position: "Systems Administrator",
      office: "New York",
      age: "59",
      start: "2009/04/10",
      salary: "$237,500",
      active:"y",
    },
    {
      name: "Bradley Greer",
      position: "Software Engineer",
      office: "London",
      age: "41",
      start: "2012/10/13",
      salary: "$132,000",
      active:"y",
    },
    {
      name: "Dai Rios",
      position: "Personnel Lead",
      office: "Edinburgh",
      age: "35",
      start: "2012/09/26",
      salary: "$217,500",
      active:"y",
    },
    {
      name: "Jenette Caldwell",
      position: "Development Lead",
      office: "New York",
      age: "30",
      start: "2011/09/03",
      salary: "$345,000",
      active:"y",
    },
    {
      name: "Yuri Berry",
      position: "Chief Marketing Officer (CMO)",
      office: "New York",
      age: "40",
      start: "2009/06/25",
      salary: "$675,000",
      active:"n",
    }
  ];
  SelectionType = SelectionType;

  constructor(
    private loadingBar: LoadingBarService,
    private modalService: BsModalService
  ) {
    this.temp = this.rows.map((prop, key) => {
      return {
        ...prop,
        id: key,
      };
    });
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

  openModal(template: TemplateRef<any>) {
    this.modal = this.modalService.show(template);
  }
  closeModal() {
    this.modal.hide()
  }

  success() {
    swal.fire({
      title: 'Berjaya',
      text: 'Peperiksaan berjaya dikemaskini',
      type: 'success',
      buttonsStyling: false,
      showCancelButton: true,
      showConfirmButton: false,
      cancelButtonClass: 'btn btn-outline-success',
      cancelButtonText: 'Tutup'
    })
  }
  ngOnInit() {}
}
