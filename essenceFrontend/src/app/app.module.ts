import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerComponent } from './customer/customer.component';
import { SolutionComponent } from './solution/solution.component';
import { EndeavorComponent } from './endeavor/endeavor.component';
import { MainComponent } from './main/main.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RequirementsComponent } from './requirements/requirements.component';
import { SoftwaresystemComponent } from './softwaresystem/softwaresystem.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    SolutionComponent,
    EndeavorComponent,
    MainComponent,
    RequirementsComponent,
    SoftwaresystemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
