import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-employees',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './employees.component.html',
  styleUrl: './employees.component.css',
})
export class EmployeesComponent {
  empleados = [
    { id: 1, name: 'Branielo', salary: 450.45, active: true },
    { id: 1, name: 'Braisak', salary: 420.0, active: true },
    { id: 2, name: 'Fernando', salary: 420.0, active: false },
    { id: 3, name: 'Marly', salary: 445.85, active: true },
    { id: 4, name: 'Cinthiux', salary: 350.69, active: false },
    { id: 5, name: 'Karlita', salary: 360.23, active: false },
    { id: 6, name: 'ElYisus', salary: 350.45, active: true },
    { id: 7, name: 'Mich', salary: 350.55, active: true },
    { id: 8, name: 'Caludio', salary: 300.88, active: false },
    { id: 9, name: 'Francisco', salary: 42.89, active: false },
    { id: 10, name: 'Vania', salary: 250.45, active: true },
  ];
}
