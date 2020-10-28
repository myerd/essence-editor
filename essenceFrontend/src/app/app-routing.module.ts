import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SolutionComponent } from './pages/solution/solution.component';
import { CustomerComponent } from './pages/customer/customer.component';
import { EndeavorComponent } from './pages/endeavor/endeavor.component';
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
  { path: 'project/:id', component: ProjectComponent, canActivate: [AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
