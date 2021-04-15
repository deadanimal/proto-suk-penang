import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { 
  AccordionModule,
  BsDropdownModule,
  ModalModule,
  ProgressbarModule, 
  TabsModule,
  TooltipModule
} from 'ngx-bootstrap';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { LoadingBarModule } from '@ngx-loading-bar/core';
import {CdkStepperModule} from '@angular/cdk/stepper';

import { RouterModule } from '@angular/router';
import { TrainingCoodinatorRoutes } from './training-coordinator.routing';
import { CalendarComponent } from './calendar/calendar.component';
import { ConfigurationComponent } from './configuration/configuration.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EvaluationDetailsComponent } from './evaluation-details/evaluation-details.component';
import { EvaluationsComponent } from './evaluations/evaluations.component';
import { ExamAddComponent } from './exam-add/exam-add.component';
import { ExamsComponent } from './exams/exams.component';
import { NeedAnalysisComponent } from './need-analysis/need-analysis.component';
import { ReportComponent } from './report/report.component';
import { ReportConfigurationComponent } from './report-configuration/report-configuration.component';
import { TrainingAddComponent } from './training-add/training-add.component';
import { TrainingDetailsComponent } from './training-details/training-details.component';
import { TrainingsComponent } from './trainings/trainings.component';
import { UsersComponent } from './users/users.component';



@NgModule({
  declarations: [CalendarComponent, ConfigurationComponent, DashboardComponent, EvaluationDetailsComponent, EvaluationsComponent, ExamAddComponent, ExamsComponent, NeedAnalysisComponent, ReportComponent, ReportConfigurationComponent, TrainingAddComponent, TrainingDetailsComponent, TrainingsComponent, UsersComponent],
  imports: [
    CommonModule,
    AccordionModule.forRoot(),
    BsDatepickerModule.forRoot(),
    BsDropdownModule.forRoot(),
    ModalModule.forRoot(),
    ProgressbarModule.forRoot(),
    TabsModule.forRoot(),
    TooltipModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    LoadingBarModule,
    NgxDatatableModule,
    RouterModule.forChild(TrainingCoodinatorRoutes),
    CdkStepperModule
  ]
})
export class TrainingCoordinatorModule { }
