BudgetItem = require('./BudgetItem.js');
Income = require('./Income.js');
Expense = require('./Expense.js');
 
class BudgetAnalysis {
   
    constructor(itemList){
        let __itemList__ = [];
 
        this.setItemList = function(itmsList){
            __itemList__ = itmsList;
        };
 
        this.getItemList = function(){
            return __itemList__;
        };
 
        this.getItemList(itemList);
    }
   
    itemFill(data){
   
        let i;
        for(let d of data){
            switch(d.type){
                case "Other":
                    i = new BudgetItem(d.amount,d.month,d.year);
                    break;
                case "Income":
                    i = new Income(d.amount,d.month,d.year,d.source);
                    break;
                case "Expense":
                    i = new Expense(d.amount,d.month,d.year,d.destination,d.spender);
            
            }
            this.getItemList().push(i);
        }
    return this.getItemList();
    }
 
    itemsByMonth(month){
        let i = 0;
        let items = [];
        while(this.getItemList()[i] != null){
            let currentItem = this.getItemList()[i];
            if(currentItem.getMonth() == month){
                    items.push(currentItem);
            }
            i++
        }
        return items;
    }
 
    itemsByYear(year){
        let i = 0;
        let items = [];
        while(this.getItemList()[i] != null){
            let currentItem = this.getItemList()[i];
            if(currentItem.getYear() == year){
                    items.push(currentItem);
            }
            i++
        }
        return items;
    }
 
    amountsByYear(year){
        let i = 0;
        let items = [];
        while(this.getItemList()[i] != null){
            let currentItem = this.getItemList()[i];
            if(currentItem.getYear() == year){
                    items.push(String(currentItem.getAmount()) + " ," + String(currentItem.getYear()));
            }
            i++
        }
        return items;
    }

    amountsByMonth(month){
        let i = 0;
        let items = [];
        while(this.getItemList()[i] != null){
            let currentItem = this.getItemList()[i];
            if(currentItem.getMonth() == month){
                    items.push(currentItem.getAmount() + " , " + String(currentItem.getMonth()));
            }
            i++
        }
        return items;
    }

    revenueByMonth(month){
        
        let itemMonth = this.itemsByMonth(month);
        let incomeSum = 0;
        let expenseSum = 0;
        let i =0;
           while(itemMonth[i] != undefined ){
            let currentItem = itemMonth[i];
 
            if(currentItem.getSource() != undefined){
             incomeSum = incomeSum + currentItem.getAmount();
            }
            else if(currentItem.getDestination() != undefined){
             expenseSum = expenseSum + currentItem.getAmount();
            }
         
     
         i++
        }
 
       let revenueSum = incomeSum - expenseSum;
       return revenueSum;
    }
 
    revenueByYear(year){
        
        let itemYear = this.itemsByYear(year);
        let incomeSum = 0;
        let expenseSum = 0;
        let i =0;
           for(i in itemYear){
 
            let currentItem = itemYear[i];
               if(currentItem.getType() == "Income"){
                incomeSum = incomeSum + currentItem.getAmount();
               }
               else if(currentItem.getType() == "Expense"){
                expenseSum = expenseSum + currentItem.getAmount();
               }
            
        
            i++
        
        }
       let revenueSum = incomeSum - expenseSum;
       return revenueSum;
 
   }
 
}
 
module.exports = BudgetAnalysis;
