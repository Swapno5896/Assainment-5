const normalPerson = {
    name:'swapno',
    age:14,
    salary:5000,
    chargeBill:function(amount,tax,tips){
        this.salary=this.salary-amount-tax-tips
        console.log(this.salary);
    }
}
const heroPerson ={
    name:'herp',
    salary:8000
}
// const heeroCharge = normalPerson.chargeBill.bind(heroPerson)
// heeroCharge(1000)

// normalPerson.chargeBill.call(heroPerson,1000,10,500);

normalPerson.chargeBill.apply(heroPerson,[2000,20,200])












