function solver(input, criteria) {
  //входните данни за служителите са в json обект, а критерия за филтриране в стринг
    let employees = JSON.parse(input);
    // от Json ги парсваме и получаваме масив от обекти
    let [key, value] = criteria.split('-');
    // критерия го сплитваме , и получаваме полето и стойноста 
    //на това поле по кето ще се филтрира 

    employees
        .filter(filterEmployees)
        .forEach((employee, i) => 
        console.log(`${i}. ${employee.first_name} ${employee.last_name} - ${employee.email}`));

    function filterEmployees(employee) {
        return employee[key] == value;
    }
}

solver(`[{
    "id": "1",
    "first_name": "Kaylee",
    "last_name": "Johnson",
    "email": "k0@cnn.com",
    "gender": "Female"
  }, {
    "id": "2",
    "first_name": "Kizzee",
    "last_name": "Johnson",
    "email": "kjost1@forbes.com",
    "gender": "Female"
  }, {
    "id": "3",
    "first_name": "Evanne",
    "last_name": "Maldin",
    "email": "emaldin2@hostgator.com",
    "gender": "Male"
  }, {
    "id": "4",
    "first_name": "Evanne",
    "last_name": "Johnson",
    "email": "ev2@hostgator.com",
    "gender": "Male"
  }]`,
    'last_name-Johnson');

// solver(`[{
//     "id": "1",
//     "first_name": "Ardine",
//     "last_name": "Bassam",
//     "email": "abassam0@cnn.com",
//     "gender": "Female"
//   }, {
//     "id": "2",
//     "first_name": "Kizzee",
//     "last_name": "Jost",
//     "email": "kjost1@forbes.com",
//     "gender": "Female"
//   },  
// {
//     "id": "3",
//     "first_name": "Evanne",
//     "last_name": "Maldin",
//     "email": "emaldin2@hostgator.com",
//     "gender": "Male"
//   }]`,
//     'gender-Female');