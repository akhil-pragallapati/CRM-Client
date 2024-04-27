import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { catchError, throwError } from 'rxjs';

import { Crm } from './crm.model';

@Injectable({
  providedIn: 'root'
})
export class CrmService {

  constructor(private fb:FormBuilder, private http: HttpClient) { }

  readonly baseURL = 'http://localhost:3000/api/crms/'

list:Crm[] = [];

  crmForm = this.fb.group({

    _id: [''],
    userName: ['', Validators.required],
    email: ['', Validators.required],
    password: ['', Validators.required],
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    address: ['', Validators.required],
    phoneNumber: [''],

  })

fetchCrmList(){
  this.http.get(this.baseURL)
  .pipe(catchError(this.errorHandler))
  .subscribe(data => {
    this.list = data as Crm[];
    //console.log(data);
  })
}

  postCrm(){
    return this.http.post(this.baseURL, this.crmForm.value)
      .pipe(catchError(this.errorHandler))
  }

  putCrm() {
    return this.http.put(this.baseURL + this.crmForm.get('_id')?.value, this.crmForm.value)
      .pipe(catchError(this.errorHandler))
  }

  deleteCrm(_id: string) {
    return this.http.delete(this.baseURL + _id)
      .pipe(catchError(this.errorHandler))
  }
  private errorHandler(error: HttpErrorResponse) {
    if (error.status === 0) {
      console.error('An error occurred:', error.error);
    } else {
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }

}

