/*
  Scenario
  Organisation Ansoft has many departments HR, R&D, finances and etc. Each department is compose of
  employees. At the end of every month, CEO forces finance experts to do one repetitive net salary
  report(sum of worker salaries per department). It was slow. They had to go through the employee
  database and manually sum salaries to calculate department cost. Long story short, developers
  found a way to replace these experts with a single program.
 */
import { Organisation } from './Composite';
import { Employee, Developer, HR, FinanceExpert } from './Component';

// create some employees
const andrew: Employee = new Developer();
const kelly: Employee = new HR();
const ramos: Employee = new FinanceExpert();
const fox: Employee = new Developer();

// create organisation and fill workers
const ansoft: Organisation = new Organisation();
ansoft.addEmployee(andrew);
ansoft.addEmployee(kelly);
ansoft.addEmployee(ramos);
ansoft.addEmployee(fox);

console.log(ansoft.getNetSalary()); // 14000
