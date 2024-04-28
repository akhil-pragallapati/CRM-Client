import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CrmComponent } from './crm/crm.component';
import { CrmFormComponent } from './crm/crm-form/crm-form.component';


import { ReactiveFormsModule } from '@angular/forms';
import { CrmHomeComponent } from './crm-home/crm-home.component';
import { CrmDetailsComponent } from './crm/crm-details/crm-details.component';
import { CrmListComponent } from './crm/crm-list/crm-list.component';
import { CrmUpdateComponent } from './crm/crm-update/crm-update.component';


@NgModule({
  declarations: [
    AppComponent,
    CrmComponent,
    CrmFormComponent,
    CrmHomeComponent,
    CrmDetailsComponent,
    CrmListComponent,
    CrmUpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
