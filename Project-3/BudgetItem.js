class BudgetItem{
    constructor(amount,month,year){
        let __amount__;
        let __month__;
        let __year__;
        var type;
 
        this.setAmount = function(amount1){
            __amount__ = amount1;
        }
 
        this.getAmount = function(){
            return __amount__;
        }
 
        this.setMonth = function(month1){
            __month__ = month1;
        }
 
        this.getMonth = function(){
            return __month__;
        }
 
        this.setYear = function(year1){
            __year__ = year1;
        }
 
        this.getYear = function(){
            return __year__;
        }
 
        this.setAmount(amount);
        this.setMonth(month);
        this.setYear(year);
        
        this.getType = function(){
            return type;
        }
 
        this.setType = function(x){
            type = x;
        }
        this.setType("Other");
 
    }
 
}
 
module.exports = BudgetItem;
