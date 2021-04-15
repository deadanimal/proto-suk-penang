import { Component, NgZone, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { LoadingBarService } from '@ngx-loading-bar/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { forkJoin, Subscription } from 'rxjs';
import { NotifyService } from 'src/app/shared/handler/notify/notify.service';

export enum SelectionType {
  single = 'single',
  multi = 'multi',
  multiClick = 'multiClick',
  cell = 'cell',
  checkbox = 'checkbox'
}
@Component({
  selector: 'app-report-configuration',
  templateUrl: './report-configuration.component.html',
  styleUrls: ['./report-configuration.component.scss']
})
export class ReportConfigurationComponent implements OnInit {

  levelSelected
  planSelected
  levelForm: FormGroup
  planForm: FormGroup

  // Table
  tableMessages = { 
    emptyMessage: 'Tiada rekod dijumpai',
    totalMessage: 'rekod'
  }
  SelectionType = SelectionType;

  tableLevelEntries: number = 5
  tableLevelSelected: any[] = []
  tableLevelTemp = []
  tableLevelActiveRow: any
  tableLevelRows: any = [
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

  tablePlanEntries: number = 5
  tablePlanSelected: any[] = []
  tablePlanTemp = []
  tablePlanActiveRow: any
  tablePlanRows: any = [
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

  // Modal
  modal: BsModalRef;
  modalConfig = {
    keyboard: true,
    class: "modal-dialog-centered"
  };

  // Checker
  isLevelEmpty: boolean = true
  isPlanEmpty: boolean = true
  isSummaryTableHidden: boolean = true

  // Icon
  iconEmpty = 'assets/img/icons/box.svg'

  // Subscriber
  subscription: Subscription

  constructor(
    private fb: FormBuilder,
    private loadingBar: LoadingBarService,
    private modalService: BsModalService,
    private notifyService: NotifyService,
    private zone: NgZone
  ) { }

  ngOnInit() {
    this.initForm()
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe()
    }
  }

  initForm() {
    this.planForm = this.fb.group({
      q1: new FormControl(null, Validators.compose([
        Validators.required
      ])),
      q2: new FormControl(null, Validators.compose([
        Validators.required
      ])),
      q3: new FormControl(null, Validators.compose([
        Validators.required
      ])),
      q4: new FormControl(null, Validators.compose([
        Validators.required
      ])),
      year: new FormControl(null, Validators.compose([
        Validators.required
      ]))
    })

    this.levelForm = this.fb.group({
      year: new FormControl(null, Validators.compose([
        Validators.required
      ])),
      level: new FormControl(null, Validators.compose([
        Validators.required
      ]))
    })
  }

  entriesChange($event, type) {
    if (type == 'level') {
      this.tableLevelEntries = $event.target.value;
    }
    else if (type == 'plan') {
      this.tablePlanEntries = $event.target.value;
    }
  }

  filterTable($event, type) {
    let val = $event.target.value.toLowerCase();
    if (type == 'level') {
      this.tableLevelTemp = this.tableLevelRows.filter(function(d) {
        return d.year.toLowerCase().indexOf(val) !== -1 || !val;
      });
    }
    else if (type == 'plan') {
      this.tablePlanTemp = this.tablePlanRows.filter(function(d) {
        return d.year.toLowerCase().indexOf(val) !== -1 || !val;
      });
    } 
  }

  onSelect({ selected }, type) {
    if (type == 'level') {
      this.tableLevelSelected.splice(0, this.tableLevelSelected.length);
      this.tableLevelSelected.push(...selected);
    }
    else if (type == 'plan') {
      this.tablePlanSelected.splice(0, this.tablePlanSelected.length);
      this.tablePlanSelected.push(...selected);
    }
  }

  onActivate(event, type) {
    if (type == 'level') {
      this.tableLevelActiveRow = event.row;
    }
    else if (type == 'plan') {
      this.tablePlanActiveRow = event.row;
    }
  }

  openModalAdd(modalRef: TemplateRef<any>) {
    this.modal = this.modalService.show(modalRef, this.modalConfig);
  }

  openModalPatch(modalRef: TemplateRef<any>, row, type) {
    this.modal = this.modalService.show(modalRef, this.modalConfig);

    if (type == 'plan') {
      this.planForm.controls['year'].setValue(row['year'])
      this.planForm.controls['q1'].setValue(row['q1'])
      this.planForm.controls['q2'].setValue(row['q2'])
      this.planForm.controls['q3'].setValue(row['q3'])
      this.planForm.controls['q4'].setValue(row['q4'])
      this.planSelected = row
    }
    else if (type == 'level') {
      this.levelForm.controls['year'].setValue(row['year'])
      this.levelForm.controls['level'].setValue(row['level'])
      this.levelSelected = row
    }
  }

  closeModal(type) {
    if (type == 'plan') {
      this.planForm.controls['year'].patchValue(null)
      this.planForm.controls['q1'].patchValue(0)
      this.planForm.controls['q2'].patchValue(0)
      this.planForm.controls['q3'].patchValue(0)
      this.planForm.controls['q4'].patchValue(0)
    }
    else if (type == 'level') {
      this.levelForm.controls['year'].patchValue(null)
      this.levelForm.controls['level'].patchValue(0)
    }
    this.modal.hide()
  }

}
