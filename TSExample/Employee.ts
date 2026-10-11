class Employee {
  name: string;
  role: string;
  department: string;
  empId: number;

  constructor(name: string, role: string, department: string, empId: number) {
    this.name = name;
    this.role = role;
    this.department = department;
    this.empId = empId;
  }

  display() {
    console.log(this.name, this.role, this.department, this.empId);
  }
}

const employee = new Employee("Mohammad Muthubuddin", "lead", "Engineer", 3423);
employee.display();

// tsc Employee.ts --ignoreConfig
// node Employee.js
