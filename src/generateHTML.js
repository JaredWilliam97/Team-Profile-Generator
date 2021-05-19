function renderManager(employee) {
  return ` <div class="row">
  <div class="card text-white bg-primary m-3 col-2">
    <div class="card-header">Manager: ${employee.employeeName()}</div>
    <div class="card-body">
      <p class="card-text">ID: ${employee.employeeId()}</p>
      <p class="card-text">Email: ${employee.employeeEmail()}</p>
      <p class="card-text">Office number: ${employee.officeNum()}</p>
    </div>
  </div>`;
}

function renderEngineer(employee) {
  return ` <div class="row">
  <div class="card text-white bg-primary m-3 col-2">
    <div class="card-header">Engineer: ${employee.employeeName()}</div>
    <div class="card-body">
      <p class="card-text">ID: ${employee.employeeId()}</p>
      <p class="card-text">Email: ${employee.employeeEmail()}</p>
      <p class="card-text">Git Hub: ${employee.getGitHub()}</p>
    </div>
  </div>`;
}

function renderIntern(employee) {
  return ` <div class="row">
  <div class="card text-white bg-primary m-3 col-2">
    <div class="card-header">Intern: ${employee.employeeName()}</div>
    <div class="card-body">
      <p class="card-text">ID: ${employee.employeeId()}</p>
      <p class="card-text">Email: ${employee.employeeEmail()}</p>
      <p class="card-text">Office number: ${employee.employeeSchool()}</p>
    </div>
  </div>`;
}
