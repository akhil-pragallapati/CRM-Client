import { Component } from '@angular/core';

import { Crm } from '../../shared/crm.model';
import { CrmService } from '../../shared/crm.service';

@Component({
  selector: 'app-crm-form',
  templateUrl: './crm-form.component.html',
  styles: ``
})
export class CrmFormComponent {

  submitted : boolean = false;

  constructor(public service: CrmService) {}

  onSubmit(){
    this.submitted = true;
    if(this.service.crmForm.valid){
       
        if(this.service.crmForm.get('_id')?.value == '')
          this.service.postCrm().subscribe(res => {
          this.service.fetchCrmList();
          this.resetForm();
          
        })
        else
            this.service.putCrm().subscribe(res => {
            this.service.fetchCrmList();
            this.resetForm();
            })
      }

  }

  resetForm() {
    this.service.crmForm.reset(new Crm());
    this.submitted = false;
  }

}

