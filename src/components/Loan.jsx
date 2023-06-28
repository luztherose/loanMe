import React from "react";
import { useState, useEffect } from "react";
import Header from "./Header";
import AddClient from "./AddClient";
import AddLoan from "./AddLoan";

import {
  getLoansLocalStorage,
  saveNewLoanOnLocalStorage,
} from "../utils/loanHelpers";

import {
  getClientsLocalStorage,
  saveNewClientOnLocalStorage,
} from "../utils/clientHelpers";

function Loan() {
  const [clients, setClients] = useState([]);
  const [loans, setLoans] = useState([]);

  const handleOnLoanSave = (newLoan) => {
    saveNewLoanOnLocalStorage(newLoan);
  };

  const handleOnClientSave = (newClient) => {
    saveNewClientOnLocalStorage(newClient);
  };

  useEffect(() => {
    setClients(getClientsLocalStorage());
    setLoans(getLoansLocalStorage());
  }, []);

  return (
    <>
      <Header />
      <AddClient onClientSave={handleOnClientSave} />
      <AddLoan clients={clients} onLoanSave={handleOnLoanSave} />
    </>
  );
}

export default Loan;
