class Employee {
  constructor(name, id, email) {
    if (typeof name !== "string") {
      throw new Error("Expected parameter of the name to be a string");
    }

    this.name = name;
    this.id = id;
    this.email = email;
  }
  employeeName() {
    return this.name;
  }
  employeeId() {
    return this.id;
  }
  employeeEmail() {
    return this.email;
  }
  getRole() {
    return "Employee";
  }
}

const employee = new Employee(123456, 123456, "sutch002@yahoo.com");
employee.employeeName();
employee.employeeId();
employee.employeeEmail();
employee.getRole();

module.exports = Employee;
