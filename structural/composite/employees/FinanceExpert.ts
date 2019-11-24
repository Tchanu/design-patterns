import { Employee } from '../Employee';

export class FinanceExpert implements Employee {
  getSalary(): number {
    return 5000;
  }
}
