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
import { AddProjectDialogComponent } from './pages/add-project-dialog/add-project-dialog.component';
import { TeamComponent } from './pages/team/team.component';
import { WorkComponent } from './pages/work/work.component';
import { WayofworkComponent } from './pages/wayofwork/wayofwork.component';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';

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
    WayofworkComponent
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
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
