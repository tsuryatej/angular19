import { Component, OnInit } from '@angular/core';
import { Employee, EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrl: './employees.component.scss'
})
export class EmployeesComponent implements OnInit {
  employees: Employee[] = [];

  constructor(private employeeService: EmployeeService) {}

  ngOnInit(): void {
    this.employeeService.getEmployees().subscribe({
      next: data => this.employees = data,
      error: err => console.error('Failed to load employees', err)
    });
  }
}
