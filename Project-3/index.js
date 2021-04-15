const fs = require("fs");
const BudgetItem = require('./BudgetItem.js');
const Income = require('./Income.js');
const Expense = require('./Expense.js');
const objects = require('./objects.json');
const BudgetAnalysis = require('./BudgetAnalysis.js');
 
 
let b = new BudgetAnalysis(objects);

b.itemFill(objects);

console.log(b.itemsByYear(2018));
console.log(b.itemsByMonth("March"));
console.log("2018 revenue: " + b.revenueByYear(2018));
console.log("2019 revenue: " + b.revenueByYear(2019));


fs.writeFile('output.json', JSON.stringify(b.amountsByMonth("February")),() => {console.log("Writing Completed")})
