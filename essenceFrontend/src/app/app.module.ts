import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CustomerComponent } from './pages/customer/customer.component';
import { SolutionComponent } from './pages/solution/solution.component';
import { EndeavorComponent } from './pages/endeavor/endeavor.component';
import { MainComponent } from './pages/main/main.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RequirementsComponent } from './pages/requirements/requirements.component';
import { SoftwaresystemComponent } from './pages/softwaresystem/softwaresystem.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CardComponent } from './components/card/card.component';
import { AddProjectDialogComponent } from './dialogs/add-project-dialog/add-project-dialog.component';
import { TeamComponent } from './pages/team/team.component';
import { WorkComponent } from './pages/work/work.component';
import { WayofworkComponent } from './pages/wayofwork/wayofwork.component';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { ProjectComponent } from './pages/project/project.component';
import { SidebarComponent } from './pages/sidebar/sidebar.component';
import { AddSolutionDialogComponent } from './dialogs/add-solution-dialog/add-solution-dialog.component';
import { AddEndeavorDialogComponent } from './dialogs/add-endeavor-dialog/add-endeavor-dialog.component';
import { AddCustomerDialogComponent } from './dialogs/add-customer-dialog/add-customer-dialog.component';
import { AddCardDialogComponent } from './dialogs/add-card-dialog/add-card-dialog.component';
import { AddRequirementsDialogComponent } from './dialogs/add-requirements-dialog/add-requirements-dialog.component';
import { AddSoftwaresystemsDialogComponent } from './dialogs/add-softwaresystems-dialog/add-softwaresystems-dialog.component';
import { AddTeamDialogComponent } from './dialogs/add-team-dialog/add-team-dialog.component';
import { AddWorkDialogComponent } from './dialogs/add-work-dialog/add-work-dialog.component';
import { AddWayofworkDialogComponent } from './dialogs/add-wayofwork-dialog/add-wayofwork-dialog.component';
import { AddOpportunityDialogComponent } from './dialogs/add-opportunity-dialog/add-opportunity-dialog.component';
import { AddStakeholdersDialogComponent } from './dialogs/add-stakeholders-dialog/add-stakeholders-dialog.component';
import { StakeholdersComponent } from './pages/stakeholders/stakeholders.component';
import { OpportunityComponent } from './pages/opportunity/opportunity.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { AddCarddataDialogComponent } from './dialogs/add-carddata-dialog/add-carddata-dialog.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    SolutionComponent,
    EndeavorComponent,
    MainComponent,
    RequirementsComponent,
    SoftwaresystemComponent,
    CardComponent,
    AddProjectDialogComponent,
    TeamComponent,
    WorkComponent,
    WayofworkComponent,
    ProjectComponent,
    SidebarComponent,
    AddSolutionDialogComponent,
    AddEndeavorDialogComponent,
    AddCustomerDialogComponent,
    AddCardDialogComponent,
    AddRequirementsDialogComponent,
    AddSoftwaresystemsDialogComponent,
    AddTeamDialogComponent,
    AddWorkDialogComponent,
    AddWayofworkDialogComponent,
    AddOpportunityDialogComponent,
    AddStakeholdersDialogComponent,
    StakeholdersComponent,
    OpportunityComponent,
    AddCarddataDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatExpansionModule,
    MatCheckboxModule,
    FlexLayoutModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
