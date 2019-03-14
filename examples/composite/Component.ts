/*
  Employee is component and employees are leaves
 */

export interface Employee {
  getSalary(): number;
}

export class Developer implements Employee {
  getSalary(): number {
    return 3500;
  }
}

export class HR implements Employee {
  getSalary(): number {
    return 2000;
  }
}

export class FinanceExpert implements Employee {
  getSalary(): number {
    return 5000;
  }
}
