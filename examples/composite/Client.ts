/*
  Scenario
  Organisation Ansoft has many departments HR, R&D, finances and etc. Each department is compose of
  employees. At the end of every month, CEO forces finance experts to do one repetitive net salary
  report(sum of worker salaries per department). It was slow. They had to go through the employee
  database and manually sum salaries to calculate department cost. Long story short, developers
  found a way to replace these experts with a single program.
 */
import { Organization } from './Organization';
import { Employee } from './Employee';

// create arbitrary leaves(employees)
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

const ansoft: Organization = new Organization();

// add workers into organization(create tree)
ansoft.addEmployee(new Developer());
ansoft.addEmployee(new HR());
ansoft.addEmployee(new FinanceExpert());
ansoft.addEmployee(new Developer());

console.log(ansoft.getNetSalary()); // 14000
