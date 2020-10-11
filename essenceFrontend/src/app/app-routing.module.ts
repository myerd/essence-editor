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


const routes: Routes = [
  { path: '', component: MainComponent},
  { path: 'solution/:id', component: SolutionComponent},
  { path: 'customer', component: CustomerComponent},
  { path: 'endeavor', component: EndeavorComponent},
  { path: 'card', component: CardComponent},
  { path: 'project', component: ProjectComponent},
  { path: 'requirements/:id', component: RequirementsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
