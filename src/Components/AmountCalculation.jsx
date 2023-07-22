import React, { useContext } from "react";
import NamesContext from "../Context/NamesContext";



function calculateCategoryAmount(setData, list , totalExpense) {
  {
    list.map((item) => {
      setData((prev) => {
        if (item.category == "Food") {
          return [
            {
              name: "Food",
              value: Number(((Number(prev[0].value) + Number(item.amount))/totalExpense)*100) ,
            },
            { name: "Travel", value: Number((Number(prev[1].value)/totalExpense)*100)  },
            { name: "Shopping", value:Number(( Number(prev[2].value)/totalExpense) *100 )},
            { name: "Other", value: Number((Number(prev[3].value)/totalExpense)*100) },
          ]; }
          
          else if (item.category == "Travel") {
          return [
            { name: "Food", value: Number((Number(prev[0].value)/totalExpense)*100) },
            {
              name: "Travel",
              value: Number(((Number(prev[1].value) + Number(item.amount))/totalExpense)*100)
            },
            { name: "Shopping", value:Number((Number(prev[2].value)/totalExpense)*100 ) },
            { name: "Other", value: Number((Number(prev[3].value)/totalExpense)*100)  },
          ];
        } else if (item.category == "Shopping") {
          return [
            { name: "Food", value: Number((Number(prev[0].value)/totalExpense)*100 )  },
            { name: "Travel", value: Number((Number(prev[1].value)/totalExpense)*100)  },
            {
              name: "Shopping",
              value: Number( ((Number(prev[2].value) + Number(item.amount))/totalExpense)*100) ,
            },
            { name: "Other", value: Number((Number(prev[3].value)/totalExpense)*100)  },
          ];
        } else {
          return [
            { name: "Food", value: Number((Number(prev[0].value)/totalExpense)*100)  },
            { name: "Travel", value: Number((Number(prev[1].value)/totalExpense)*100) },
            { name: "Shopping", value: Number((Number(prev[2].value)/totalExpense)*100 ) },
            {
              name: "Other",
              value: Number(((Number(prev[3].value) + Number(item.amount))/totalExpense)*100),
            },
          ];
        }
      });
    });
  }
}

function getCategoryAmount(setData, list1, list2) {
  calculateCategoryAmount(setData, list1);
  calculateCategoryAmount(setData, list2);
}

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

function getTotalExpense(p1Expense , p2Expense , setTotalExpense){
    setTotalExpense(p1Expense+p2Expense) ;
}

export { calculateCategoryAmount, getCategoryAmount, getUserExpense , toPay , getTotalExpense };
