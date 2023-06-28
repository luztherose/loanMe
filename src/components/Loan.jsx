import React from "react";
import { useState, useEffect } from "react";
import Header from "./Header";
import AddLoan from "./AddLoan";

import {
  getAllClients,
  getLoansLocalStorage,
  saveNewLoanOnLocalStorage,
} from "../helpers";

function Loan() {
  const [clients, setClients] = useState([]);
  const [loans, setLoans] = useState([]);

  const handleOnLoanSave = (newLoan) => {
    saveNewLoanOnLocalStorage(newLoan);
  };

  useEffect(() => {
    setClients(getAllClients());
    setLoans(getLoansLocalStorage());
  }, []);

  return (
    <>
      <Header />
      <AddLoan clients={clients} onLoanSave={handleOnLoanSave} />
    </>
  );
}

export default Loan;
