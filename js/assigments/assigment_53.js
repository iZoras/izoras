/*Максимальная зарплата*/


function topSalary(salaries) {
  let maxSalary = 0;
  let topEarner = null;

  for (let [name, salary] of Object.entries(salaries)) {
    if (salary > maxSalary) {
      maxSalary = salary;
      topEarner = name;
    }
  }

  return topEarner;
}
