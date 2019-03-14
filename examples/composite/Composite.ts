import { Employee } from './Component';

export class Organisation {
  private employees: Employee[] = [];

  addEmployee(employee: Employee): void {
    this.employees.push(employee);
  }

  getNetSalary(): number {
    return this.employees.reduce((acc: number, val: Employee) => val.getSalary() + acc, 0);
  }
}
