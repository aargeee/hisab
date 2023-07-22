import React, { useContext, useEffect, useState } from "react";
import Piechart from "./Piechart";
import NamesContext from "../Context/NamesContext";
import ListContext from "../Context/ListContext";
import * as calc from './AmountCalculation';
import styles from "../CSS/OutputSection.module.css"

function OutputSection(props) {
  const context = useContext(NamesContext);
  const context2 = useContext(ListContext);
  useEffect(() => {
    Manager();

  }, [context2.user1List, context2.user2List])

  const [P1Expense, setP1Expense] = useState(0);
  const [P2Expense, setP2Expense] = useState(0);
  useEffect(() => {
    calc.toPay(P1Expense, P2Expense, setToPay, setPersonStatus);
  }, [P1Expense, P2Expense])
  const [toPay, setToPay] = useState(0);
  const [personStatus, setPersonStatus] = useState({
    lender: "",
    debter: ""
  })

  function Manager() {
    calc.getUserExpense(setP1Expense, context2.user1List);
    calc.getUserExpense(setP2Expense, context2.user2List);
  }

  return (
    <div className={styles.OutputSection}>
      <Piechart />
      <div className={styles.Message}>
        {personStatus.debter == "p1" ? context.user1Name : context.user2Name} owes Rs. {toPay} to {personStatus.lender == "p2" ? context.user2Name : context.user1Name}
      </div>
    </div>
  );
}

export default OutputSection;
