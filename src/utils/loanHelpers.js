import React from "react";
import { useState, useEffect } from "react";

export const setLoanLocalStorage = (loans) => {
  localStorage.setItem("loans", JSON.stringify(loans));
};

export const getLoansLocalStorage = () =>
  JSON.parse(localStorage.getItem("loans") || "[]");

export const saveNewLoanOnLocalStorage = (newLoan) => {
  const loans = getLoansLocalStorage();
  newLoan.loanId = newLoan.loanId + 1;
  newLoan.nextPaymentDate = setLoanLocalStorage([...loans, newLoan]);
};

export const getLoansByClient = (loans, selectedClient) => {
  if (loans.length === 0) {
    return;
  }
  return loans.filter((loan) => loan.clientId === selectedClient.clientId);
};
