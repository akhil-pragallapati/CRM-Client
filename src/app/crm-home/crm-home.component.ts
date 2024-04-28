import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crm-home',
  templateUrl: './crm-home.component.html',
  styles: ``
})
export class CrmHomeComponent {

  constructor(private router: Router) {}

    goToCreateCustomer() {
        // Navigate to the route for creating a customer
        this.router.navigate(['/create-customer']);
    }

    goToListCustomers() {
        // Navigate to the route for listing all customers
        this.router.navigate(['/customer-details']);
    }
    goToUpdateCustomers() {
      // Navigate to the route for Updating all customers
      this.router.navigate(['/update-customer']);
  }

    goToDeleteCustomers() {
        // Navigate to the route for deleting customers
        this.router.navigate(['/delete-customers']);
    }
}
