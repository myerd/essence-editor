import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SolutionComponent } from './pages/solution/solution.component';
import { CustomerComponent } from './pages/customer/customer.component';
import { EndeavorComponent } from './pages/endeavor/endeavor.component';
import { main } from '@angular/compiler-cli/src/main';
import { MainComponent } from './pages/main/main.component';
import { CardComponent } from './components/card/card.component';
import { ProjectComponent } from './pages/project/project.component';
import { RequirementsComponent } from './pages/requirements/requirements.component';
import { SoftwaresystemComponent } from './pages/softwaresystem/softwaresystem.component';
import { OpportunityComponent } from './pages/opportunity/opportunity.component';
import { StakeholdersComponent } from './pages/stakeholders/stakeholders.component';
import { TeamComponent } from './pages/team/team.component';
import { WorkComponent } from './pages/work/work.component';
import { WayofworkComponent } from './pages/wayofwork/wayofwork.component';


const routes: Routes = [
  { path: '', component: MainComponent},
  { path: 'solution/:id', component: SolutionComponent},
  { path: 'customer/:id', component: CustomerComponent},
  { path: 'endeavor/:id', component: EndeavorComponent},
  { path: 'card', component: CardComponent},
  { path: 'project/:id', component: ProjectComponent},
  { path: 'requirements/:id', component: RequirementsComponent},
  { path: 'softwaresystems/:id', component: SoftwaresystemComponent},
  { path: 'opportunity/:id', component: OpportunityComponent},
  { path: 'stakeholders/:id', component: StakeholdersComponent},
  { path: 'team/:id', component: TeamComponent},
  { path: 'work/:id', component: WorkComponent},
  { path: 'wayofwork/:id', component: WayofworkComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
