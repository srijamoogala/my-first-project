// 1. Parent Class: Employee
class Employee {
    constructor(employeeName, employeeID, basicSalary) {
      this.employeeName = employeeName;
      this.employeeID = employeeID;
      this.basicSalary = basicSalary;
    }
  
    displayEmployee() {
      console.log("Employee Name: " + this.employeeName);
      console.log("Employee ID: " + this.employeeID);
      console.log("Basic Salary: " + this.basicSalary);
    }
  }
  
  // 2. Child Class: Manager
  class Manager extends Employee {
    constructor(employeeName, employeeID, basicSalary, department) {
      super(employeeName, employeeID, basicSalary); // calls parent constructor
      this.department = department;
    }
  
    displayManager() {
      this.displayEmployee(); // reuse parent method
      console.log("Department: " + this.department);
    }
  }
  
  // 3. Create an Object
  let manager1 = new Manager("Rahul", "EMP101", 50000, "IT");
  
  // Display
  manager1.displayManager();