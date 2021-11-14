import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HreRoutingModule } from './hre-routing.module';
import { HreComponent } from './hre.component';
import { HreDesktopComponent } from './hre-desktop/hre-desktop.component';
import { HreCatalogComponent } from './hre-catalog/hre-catalog.component';
import { HreManagementComponent } from './hre-management/hre-management.component';
import { HreVacationComponent } from './applications/hre-vacation/hre-vacation.component';
import { HreBusinessTripComponent } from './applications/hre-business-trip/hre-business-trip.component';
import { HreRefWorkComponent } from './applications/hre-ref-work/hre-ref-work.component';
import { HreRefSalaryComponent } from './applications/hre-ref-salary/hre-ref-salary.component';
import { HreThanksComponent } from './applications/hre-thanks/hre-thanks.component';
import { HreIdeaCenterComponent } from './applications/hre-idea-center/hre-idea-center.component';
import { HreIndPlanComponent } from './applications/hre-ind-plan/hre-ind-plan.component';
import { HreAnnScheduleComponent } from './applications/hre-ann-schedule/hre-ann-schedule.component';
import { CatalogServicesComponent, Services } from './hre-catalog/catalog-services/catalog-services.component';
import { OutcomingComponent } from './hre-catalog/outcoming/outcoming.component';
import { IncomingComponent } from './hre-catalog/incoming/incoming.component';
import { TreatmentsComponent } from './hre-management/treatments/treatments.component';
import { AllApplicationsComponent } from './hre-management/all-applications/all-applications.component';
import { AllRequestsComponent } from './hre-management/all-requests/all-requests.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HelperModule } from '@app/_helpers/helper.module';
import { TranslateModule } from '@ngx-translate/core';
import { DetailFormComponent } from './applications/hre-vacation/detail-form/detail-form.component';
import { InitiatorInfoComponent } from './applications/initiator-info/initiator-info.component';
import { StepInfoComponent } from './applications/step-info/step-info.component';
import { VacationBalanceComponent } from './applications/hre-vacation/vacation-balance/vacation-balance.component';
import { AnnualScheduleComponent } from './applications/hre-vacation/annual-schedule/annual-schedule.component';
import { RequestsComponent } from './applications/requests/requests.component';
import { TripDetailFormComponent } from './applications/hre-business-trip/trip-detail-form/trip-detail-form.component';
import { VacationAddInfoComponent } from './applications/hre-vacation/vacation-add-info/vacation-add-info.component';
import { AppSharedModule } from '@app/app-shared.module';
import { FilesDecreeComponent } from './applications/files-decree/files-decree.component';
import { HreWidgetsComponent } from './hre-desktop/hre-widgets/hre-widgets.component';
import { DaysAnnualVacationComponent } from './hre-desktop/hre-widgets/days-annual-vacation/days-annual-vacation.component';
import { NumberPeopleCurrentMonthComponent } from './hre-desktop/hre-widgets/number-people-current-month/number-people-current-month.component';
import { ExecutionTrainingComponent } from './hre-desktop/hre-widgets/execution-training/execution-training.component';
import { EmployeesNumberComponent } from './hre-desktop/hre-widgets/employees-number/employees-number.component';
import { ThanksDetailFormComponent } from './applications/hre-thanks/thanks-detail-form/thanks-detail-form.component';
import { RequestDetailFormComponent } from './applications/requests/request-detail-form/request-detail-form.component';
import { RefWorkDetailComponent } from './applications/hre-ref-work/ref-work-detail/ref-work-detail.component';
import { RefSalaryDetailComponent } from './applications/hre-ref-salary/ref-salary-detail/ref-salary-detail.component';
import { AnnScheduleDetailComponent } from './applications/hre-ann-schedule/ann-schedule-detail/ann-schedule-detail.component';
import { IdeaCenterDetailComponent } from './applications/hre-idea-center/idea-center-detail/idea-center-detail.component';
import { IdeaCenterListComponent } from './applications/hre-idea-center/idea-center-list/idea-center-list.component';
import { IndPlanDetailComponent } from './applications/hre-ind-plan/ind-plan-detail/ind-plan-detail.component';
import { ConfirmationService, MessageService } from 'primeng/api';
import { IndPlanMainComponent } from './applications/hre-ind-plan/ind-plan-main/ind-plan-main.component';
import { IndPlanTablePartComponent } from './applications/hre-ind-plan/ind-plan-detail/ind-plan-table-part/ind-plan-table-part.component';
import { ComponentPoolService } from '@app/_services/componentPool.service';
import { BuilderSerice } from '@app/_services/builder.service';
import { DbQueryService } from '@app/_services';
import { HreIdeaMainComponent } from './applications/hre-idea-center/hre-idea-main/hre-idea-main.component';
import { IdeaDetailComponent } from './applications/hre-idea-center/idea-detail/idea-detail.component';
import { HreIndPlanAdminComponent } from './applications/hre-ind-plan/ind-plan-main/hre-ind-plan-admin/hre-ind-plan-admin.component';
import {InputSwitch, InputSwitchModule} from "primeng/inputswitch";
import { VacationOrderFormComponent } from './applications/hre-vacation/vacation-order-form/vacation-order-form.component';
import { HreVacationOrderPaymentComponent } from './applications/hre-vacation/hre-vacation-order-payment/hre-vacation-order-payment.component';
import { IdeaTimelineComponent } from './applications/hre-idea-center/idea-timeline/idea-timeline.component';
import { BusinessTripOrderComponent } from './applications/hre-business-trip/business-trip-order/business-trip-order.component';
import { OrderForPaymentComponent } from './applications/hre-business-trip/order-for-payment/order-for-payment.component';
import { HotelBookingOrderComponent } from './applications/hre-business-trip/hotel-booking-order/hotel-booking-order.component';
import { DashboardComponent } from './applications/hre-thanks/dashboard/dashboard.component';
import { TopTenComponent } from './applications/hre-thanks/dashboard/top-ten/top-ten.component';
import { ByStatusComponent } from './applications/hre-thanks/dashboard/by-status/by-status.component';
import { BarChartComponent } from '@app/_components/charts/bar-chart/bar-chart.component';
import { WidgetWrapperComponent } from '../prsna/prsna-employee-card/widget-wrapper/widget-wrapper.component';
import { IprBarComponent } from './applications/hre-ind-plan/ind-plan-main/ipr-bar/ipr-bar.component';

@NgModule({
  declarations: [
    HreComponent,
    HreDesktopComponent,
    HreCatalogComponent,
    HreManagementComponent,
    HreVacationComponent,
    HreBusinessTripComponent,
    HreRefWorkComponent,
    HreRefSalaryComponent,
    HreThanksComponent,
    HreIdeaCenterComponent,
    HreIndPlanComponent,
    AnnScheduleDetailComponent,
    CatalogServicesComponent,
    OutcomingComponent,
    IncomingComponent,
    TreatmentsComponent,
    AllApplicationsComponent,
    AllRequestsComponent,
    DetailFormComponent,
    InitiatorInfoComponent,
    StepInfoComponent,
    VacationBalanceComponent,
    AnnualScheduleComponent,
    RequestsComponent,
    TripDetailFormComponent,
    VacationAddInfoComponent,
    FilesDecreeComponent,
    HreWidgetsComponent,
    DaysAnnualVacationComponent,
    NumberPeopleCurrentMonthComponent,
    ExecutionTrainingComponent,
    EmployeesNumberComponent,
    ThanksDetailFormComponent,
    RequestDetailFormComponent,
    RefWorkDetailComponent,
    RefSalaryDetailComponent,
    AnnScheduleDetailComponent,
    IdeaCenterDetailComponent,
    IdeaCenterListComponent,
    IndPlanDetailComponent,
    IndPlanMainComponent,
    IndPlanTablePartComponent,
    Services,
    HreIdeaMainComponent,
    IdeaDetailComponent,
    HreIndPlanAdminComponent,
    VacationOrderFormComponent,
    IdeaTimelineComponent,
    HreVacationOrderPaymentComponent,
    BusinessTripOrderComponent,
    OrderForPaymentComponent,
    HotelBookingOrderComponent,
    DashboardComponent,
    TopTenComponent,
    ByStatusComponent,
    IprBarComponent,


  ],

  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HelperModule,
    AppSharedModule,
    InputSwitchModule,

    TranslateModule.forChild(),

    HreRoutingModule
  ],

  entryComponents: [
    CatalogServicesComponent,
    IncomingComponent,
    OutcomingComponent,
    AllApplicationsComponent,
    AllRequestsComponent,
    VacationBalanceComponent,
    AnnualScheduleComponent,
    RequestsComponent,
    HreWidgetsComponent,

    // charts
    DaysAnnualVacationComponent,
    NumberPeopleCurrentMonthComponent,
    ExecutionTrainingComponent,
    EmployeesNumberComponent,
    TopTenComponent
  ],

  providers: [
    ConfirmationService,
    ComponentPoolService,
    BuilderSerice,
    DbQueryService,
    MessageService
  ]
})
export class HreModule { }
