import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Employee {
  employeeId: number;
  employeeCode: string;
  verificationDocNumber: string;
  verificationDocName: string;
  profileOverview: string;
  fullName: string;
  isFresher: boolean;
  maritalStatus: string;
  spouseName: string;
  email: string;
  mobile: string;
  gender: string;
  dob: string;
  joiningDate: string;
  departmentId: number;
  designationId: number;
  stateName: string;
  cityName: string;
  profilePhotoUrl: string;
  status: string;
  createdAt: string;
}

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private readonly apiUrl = 'https://motopartz.gerasim.in/api/Employee/all';

  constructor(private http: HttpClient) {}

  getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.apiUrl);
  }
}
