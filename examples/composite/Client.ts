/*
  Scenario
  Organisation Ansoft has many departments HR, R&D, finances and etc. Each department is compose of
  employees. At the end of every month, CEO forces finance experts to do one repetitive net salary
  report(sum of worker salaries per department). It was slow. They had to go through the employee
  database and manually sum salaries to calculate department cost. Long story short, developers
  found a way to replace these experts with a single program.
 */
import { Organization } from './Organization';
import { Developer, FinanceExpert, HR } from './employees';

const ansoft: Organization = new Organization();

// add workers into organization(create tree)
ansoft.addEmployee(new Developer());
ansoft.addEmployee(new HR());
ansoft.addEmployee(new FinanceExpert());

console.log(ansoft.getNetSalary()); // 14000
