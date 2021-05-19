class Employee {
  constructor(name, id, email) {
    if (typeof name !== "string") {
      throw new Error("Expected parameter of the name to be a string");
    }

    this.name = name;
    this.id = id;
    this.email = email;
  }

  getName() {
    return this.name;
  }

  getId() {
    return this.id;
  }

  getEmail() {
    return this.email;
  }

  getRole() {
    return "Employee";
  }
}

// const employee = new Employee(123456, 123456, "sutch002@yahoo.com");
// employee.employeeName(); // returns employee's name
// employee.employeeId();
// employee.employeeEmail();
// employee.getRole();

module.exports = Employee;
