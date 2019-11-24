// create arbitrary leaves(employees)
import { Employee } from '../Employee';

export class Developer implements Employee {
  getSalary(): number {
    return 3500;
  }
}
