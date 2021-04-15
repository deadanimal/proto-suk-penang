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

import { RouterModule } from '@angular/router';
import { UserRoutes } from './user.routing';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EvaluationsComponent } from './evaluations/evaluations.component';
import { ExamAddComponent } from './exam-add/exam-add.component';
import { ExamsComponent } from './exams/exams.component';
import { NeedAnalysisComponent } from './need-analysis/need-analysis.component';
import { TakwimComponent } from './takwim/takwim.component';
import { TraingAddComponent } from './traing-add/traing-add.component';
import { TrainingDetailComponent } from './training-detail/training-detail.component';
import { TrainingEvaluateComponent } from './training-evaluate/training-evaluate.component';
import { TrainingHistoryComponent } from './training-history/training-history.component';
import { TrainingInformationComponent } from './training-information/training-information.component';
import { TrainingListComponent } from './training-list/training-list.component';
import { TrainingsComponent } from './trainings/trainings.component';

@NgModule({
  declarations: [DashboardComponent, EvaluationsComponent, ExamAddComponent, ExamsComponent, NeedAnalysisComponent, TakwimComponent, TraingAddComponent, TrainingDetailComponent, TrainingEvaluateComponent, TrainingHistoryComponent, TrainingInformationComponent, TrainingListComponent, TrainingsComponent],
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
    RouterModule.forChild(UserRoutes)
  ]
})
export class UserModule { }
