import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

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
  getEmployees(): Observable<Employee[]> {
    const employee: Employee = {
      employeeId: 77,
      employeeCode: 'EMP9515',
      verificationDocNumber: 'DSF3242DSf',
      verificationDocName: 'Pan Card',
      profileOverview: 'test Lorem ipsum',
      fullName: 'Serikath bebo',
      isFresher: false,
      maritalStatus: '2',
      spouseName: '0',
      email: 'Serikanth@gmail.com',
      mobile: '65894775',
      gender: 'male',
      dob: '1990-05-05T00:00:00',
      joiningDate: '2023-05-05T00:00:00',
      departmentId: 8,
      designationId: 11,
      stateName: 'Los Anglos',
      cityName: 'Delviana',
      profilePhotoUrl: '/assets/images/default-avatar.png',
      status: 'active',
      createdAt: '2025-05-06T08:18:26.04'
    };

    return of([employee]);
  }
}
