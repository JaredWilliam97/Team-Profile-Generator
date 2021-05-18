const Employee = require("./Employee");

class Engineer extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email);
    this.git = github;
  }

  getGitHub() {
    return this.git;
  }

  getRole() {
    return "Engineer";
  }
}
module.exports = Engineer;

// const myEngineer = new Engineer("Jared", 1, "sutch@yahoo.com", "jsutch");
