const employee = {
    name: "Tom",
    streetAddress: "123 Mainstreet"
};

function updateEmployeeWithKeyAndValue(employee, streetAddress) {
    const newEmployee = {...employee};
    newEmployee.streetAddress = "11 Broadway";
    return newEmployee;
};

function destructivelyUpdateEmployeeWithKeyAndValue() {
    employee.name = "Sam"; 
    employee.streetAddress = "12 Broadway"
    return employee;
};

function deleteFromEmployeeByKey() {
    const newEmployee = {...employee};
    delete newEmployee.name;
    return newEmployee;
};

function destructivelyDeleteFromEmployeeByKey() {
    delete employee.name;
    return employee;
};