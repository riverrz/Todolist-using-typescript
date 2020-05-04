abstract class Department {
  static fiscalYear = 2020;
  // private name: string;
  protected employees: string[] = [];

  constructor(protected readonly id: string, public name: string) {}

  abstract describe(): void;

  addEmployee(employee: string) {
    this.employees.push(employee);
  }
  printEmployeeInfo() {
    console.log(this.employees.length);
    console.log(this.employees);
  }

  static createEmployee(name: string) {
    return {
      name,
    };
  }
}

class ITDepartment extends Department {
  admins: string[];
  constructor(id: string, admins: string[]) {
    super(id, "IT");
    this.admins = admins;
  }
  describe() {
    console.log("IT Department ID:", this.id);
  }
}

class AccountingDepartment extends Department {
  private lastReport: string;
  private static instance: AccountingDepartment;

  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error("No report found");
  }

  set mostRecentReport(value: string) {
    if (!value) {
      throw new Error("Please pass in a valid value");
    }
    this.addReport(value);
  }

  private constructor(id: string, private reports: string[]) {
    super(id, "Accounting");
    this.lastReport = reports[0];
  }

  static getInstance() {
    if (!this.instance) {
      this.instance = new AccountingDepartment("13", []);
    }
    return this.instance;
  }

  describe() {
    console.log("Accounting Department ID: ", this.id);
  }

  addReport(report: string) {
    this.reports.push(report);
    this.lastReport = report;
  }
  printReport() {
    console.log(this.reports);
  }
  addEmployee(name: string) {
    if (name === "Shivam") {
      return;
    }
    this.employees.push(name);
  }
}

const employee = Department.createEmployee("Shivam");

const it = new ITDepartment("12", ["asdas"]);
it.addEmployee("asndjas");
it.describe();

const accounting = AccountingDepartment.getInstance();
const accounting2 = AccountingDepartment.getInstance();
console.log(accounting === accounting2);

accounting.addReport("Something went wrong");

accounting.mostRecentReport = "123";

accounting.addEmployee("Shivam");

accounting.describe();
