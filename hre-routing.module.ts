import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HreAnnScheduleComponent } from './applications/hre-ann-schedule/hre-ann-schedule.component';
import { HreBusinessTripComponent } from './applications/hre-business-trip/hre-business-trip.component';
import { HreIdeaCenterComponent } from './applications/hre-idea-center/hre-idea-center.component';
import { IdeaCenterListComponent } from './applications/hre-idea-center/idea-center-list/idea-center-list.component';
import { HreIndPlanComponent } from './applications/hre-ind-plan/hre-ind-plan.component';
import { IndPlanMainComponent } from './applications/hre-ind-plan/ind-plan-main/ind-plan-main.component';
import { HreRefSalaryComponent } from './applications/hre-ref-salary/hre-ref-salary.component';
import { HreRefWorkComponent } from './applications/hre-ref-work/hre-ref-work.component';
import { HreThanksComponent } from './applications/hre-thanks/hre-thanks.component';
import { HreVacationComponent } from './applications/hre-vacation/hre-vacation.component';
import { HreCatalogComponent } from './hre-catalog/hre-catalog.component';
import { HreDesktopComponent } from './hre-desktop/hre-desktop.component';
import { HreManagementComponent } from './hre-management/hre-management.component';

import { HreComponent } from './hre.component';

const routes: Routes = [
  {
    path: '',
    component: HreDesktopComponent,
  },
  { path: 'desktop', component: HreDesktopComponent },
  { path: 'services', component: HreCatalogComponent },
  { path: 'management', component: HreManagementComponent },
  { path: 'ind_plan', component: IndPlanMainComponent },
  { path: 'idea_center', component: HreIdeaCenterComponent },
  { path: 'thanks', component: HreThanksComponent },
  { path: ':code/:id', component: HreComponent },
  { path: 'idea', component: IdeaCenterListComponent },
  // { path: 'hre_vacation/:id', component: HreVacationComponent },
  // { path: 'hre_busines_trip/:id', component: HreBusinessTripComponent },
  // { path: 'hre_ref_work/:id', component: HreRefWorkComponent },
  // { path: 'hre_ref_sal/:id', component: HreRefSalaryComponent },
  // { path: 'hre_ann_sch/:id', component: HreAnnScheduleComponent },
  // { path: 'hre_thanks/:id', component: HreThanksComponent },
  // { path: 'hre_ind_plan/:id', component: HreIndPlanComponent },
  // { path: 'hre_idea_center/:id', component: HreIdeaCenterComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HreRoutingModule {}
