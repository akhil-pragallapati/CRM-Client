import { Component, OnInit } from '@angular/core';
import { CrmService } from '../../shared/crm.service';
import { Crm } from '../../shared/crm.model';


@Component({
  selector: 'app-crm-list',
  templateUrl: './crm-list.component.html',
  styles: ``
})
export class CrmListComponent implements OnInit {

  constructor(public service: CrmService){}

  ngOnInit(): void {
    this.service.fetchCrmList();
  }
  populateForm(selectedRecord: Crm) {
    this.service.crmForm.setValue({
      _id: selectedRecord._id,
      userName: selectedRecord.userName,
      email: selectedRecord.email,
      password: selectedRecord.password,
      firstName: selectedRecord.firstName,
      lastName: selectedRecord.lastName,
      address: selectedRecord.address,
      phoneNumber: selectedRecord.phoneNumber,
    })
  }

  onDelete(_id: string) {
    if (confirm('Are you sure to delete this record?')) {
      this.service.deleteCrm(_id).subscribe(res => {
        this.service.fetchCrmList();
        
      })
    }
  }
}

