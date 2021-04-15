BudgetItem = require('./BudgetItem.js');

class Expense extends BudgetItem
{

    constructor(amount,month, year, destination, spender)
    {
        super(amount,month,year);
        
        var __destination__;
        var __spender__;
        var type;
        
 
        this.setDestination = function(destination){
            __destination__ = destination;
        }
 
        this.getDestination = function(){
            return __destination__;
        }

        this.setSpender = function(spender){
            __spender__ = spender;
        }

        this.getSpender = function(){
            return spender;
        }
 
        this.getType = function(){
            return type;
        }
 
        this.setType = function(x){
            type = x;
        }
 
        
        this.setDestination(destination);
        this.setSpender(spender);
        this.setType("Expense");
        
 
    }
 
    
}
module.exports = Expense;
