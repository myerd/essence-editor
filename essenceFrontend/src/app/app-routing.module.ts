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
import { AuthGuard } from './services/auth.service';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';


const routes: Routes = [
  { path: '', component: MainComponent},
  { path: 'login', component: LoginComponent},
  { path: 'signup', component: SignupComponent},
  { path: 'solution/:id', component: SolutionComponent, canActivate: [AuthGuard]},
  { path: 'customer/:id', component: CustomerComponent, canActivate: [AuthGuard]},
  { path: 'endeavor/:id', component: EndeavorComponent, canActivate: [AuthGuard]},
  { path: 'card', component: CardComponent, canActivate: [AuthGuard]},
  { path: 'project/:id', component: ProjectComponent, canActivate: [AuthGuard]},
  { path: 'requirements/:id', component: RequirementsComponent, canActivate: [AuthGuard]},
  { path: 'softwaresystems/:id', component: SoftwaresystemComponent, canActivate: [AuthGuard]},
  { path: 'opportunity/:id', component: OpportunityComponent, canActivate: [AuthGuard]},
  { path: 'stakeholders/:id', component: StakeholdersComponent, canActivate: [AuthGuard]},
  { path: 'team/:id', component: TeamComponent, canActivate: [AuthGuard]},
  { path: 'work/:id', component: WorkComponent, canActivate: [AuthGuard]},
  { path: 'wayofwork/:id', component: WayofworkComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
