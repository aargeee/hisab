function getUserExpense(setExpense, list) {
  setExpense(0);
  list.map((item) => {
    setExpense((prev) => {
      return Number(prev) + Number(item.amount);
    });
  });
}

function toPay(p1Expense, p2Expense, setToPay, setPersonStatus) {

  if (p1Expense > p2Expense) {
    setToPay(Number(p1Expense) - Number(p2Expense));
    setPersonStatus((prev) => {
      return {
        lender: "p1" ,
        debter: "p2" 
      };
    });
  }

  else if(p2Expense>p1Expense){
    setToPay(Number(p2Expense) - Number(p1Expense));
    setPersonStatus((prev) => {
      return {
        lender: "p2" ,
        debter: "p1"
      };
    });
  }

  else{
    setToPay(0) ;
  }
}
export { getUserExpense , toPay};
