import { Employee } from '../Employee';

export class HR implements Employee {
  getSalary(): number {
    return 2000;
  }
}
