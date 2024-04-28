import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CrmHomeComponent } from './crm-home/crm-home.component';
import { CrmComponent } from './crm/crm.component';
import { CrmDetailsComponent } from './crm/crm-details/crm-details.component';
import { CrmUpdateComponent } from './crm/crm-update/crm-update.component';
import { CrmListComponent } from './crm/crm-list/crm-list.component';

const routes: Routes = [
  
  { path: '', component: CrmHomeComponent },
  { path: 'create-customer', component: CrmComponent },
  { path: 'customer-details', component: CrmDetailsComponent },
  {path: 'update-customer', component: CrmUpdateComponent },
  { path: 'delete-customers', component: CrmListComponent },
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
