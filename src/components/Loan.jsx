import React from "react";
import { useState } from "react";
import Header from "./header";
import AddClient from "./addClient";
import AddLoan from "./addLoan";
import ClientLoans from "./clientLoans";

function Loan() {
  const [client, setClient] = useState({
    name: "",
    governmentId: "",
    email: "",
    phone: "",
    note: "",
  });

  const [loan, setLoan] = useState({
    clientName: "",
    loanAmount: "",
    interestRate: "",
    startDate: "",
    frequency: "",
    note: "",
  });

  const handleClientInfo = (e) => {
    let name, governmentId, email, phone, note;

    switch (e.target.name) {
      case "name":
        name = e.target.value;
        setClient({ ...client, name });
        break;
      case "governmentId":
        governmentId = e.target.value;
        setClient({ ...client, governmentId });
        break;
      case "email":
        email = e.target.value;
        setClient({ ...client, email });
        break;
      case "phone":
        phone = e.target.value;
        setClient({ ...client, phone });
        break;
      case "note":
        note = e.target.value;
        setClient({ ...client, note });
        break;
      default:
        break;
    }
  };

  const handleLoanInfo = (e) => {
    let clientName, loanAmount, interestRate, startDate, frequency, note;

    switch (e.target.name) {
      case "clientName":
        clientName = e.target.value;
        setLoan({ ...loan, clientName });
        break;
      case "loanAmount":
        loanAmount = e.target.value;
        setLoan({ ...loan, loanAmount });
        break;
      case "interestRate":
        interestRate = e.target.value;
        setLoan({ ...loan, interestRate });
        break;
      case "startDate":
        startDate = e.target.value;
        setLoan({ ...loan, startDate });
        break;
      case "frequency":
        frequency = e.target.value;
        setLoan({ ...loan, frequency });
        break;
      case "note":
        note = e.target.value;
        setLoan({ ...loan, note });
        break;
      default:
        break;
    }
  };

  return (
    <>
      <Header />
      <AddClient
        client={client}
        onChange={handleClientInfo}
        onClient={setClient}
      />
      <AddLoan loan={loan} onChange={handleLoanInfo} onLoan={setLoan} />
      <ClientLoans />
    </>
  );
}

export default Loan;
