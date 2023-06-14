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

  const handleClientInfoOnChange = (e) => {
    let name, governmentId, email, phone, note;
    // debugger;
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

  return (
    <>
      <Header />
      <AddClient client={client} onChange={handleClientInfoOnChange} onClient={setClient} />
      <AddLoan />
      <ClientLoans />
    </>
  );
}

export default Loan;
