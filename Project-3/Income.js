BudgetItem = require('./BudgetItem.js');
class Income extends BudgetItem
{
    constructor(amount,month, year, source)
    {
        super(amount,month,year);
        
        var __source__;
        var type;
        
 
        this.setSource = function(source){
            __source__ = source;
        }
 
        this.getSource = function(){
            return __source__;
        }
 
        this.getType = function(){
            return type;
        }
 
        this.setType = function(x){
            type = x;
        }
 
        
        this.setSource(source);
        this.setType("Income");
        
 
    }
 
    
}
module.exports = Income;
