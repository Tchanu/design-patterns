import { Employee } from './Employee';

/**
 * Organization is a Composite which has leaves(Employees). In some cases Composite can implement
 * base interface and delegate Composites with leaves, but in this example it would be stupid.
 */
export class Organization {
  private employees: Employee[] = [];

  addEmployee(employee: Employee): void {
    this.employees.push(employee);
  }

  getNetSalary(): number {
    return this.employees.reduce((acc: number, val: Employee) => val.getSalary() + acc, 0);
  }
}
