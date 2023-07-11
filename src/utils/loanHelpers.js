import React from "react";
import { useState, useEffect } from "react";

export const setLoanLocalStorage = (loans) => {
  localStorage.setItem("loans", JSON.stringify(loans));
};

export const getLoansLocalStorage = () =>
  JSON.parse(localStorage.getItem("loans") || "[]");

export const increaseDateBy = (frequency, stringDate, increment) => {
  let date = new Date(stringDate);

  switch (frequency) {
    case "monthly":
      date.setMonth(date.getMonth() + increment);
      break;

    case "bi-weekly":
      date.setUTCDate(date.getUTCDate() + 14 * increment);
      break;

    case "yearly":
      date.setFullYear(date.getFullYear() + increment);
      break;

    default:
      break;
  }
  return date.toISOString().slice(0, 10);
};

export const saveNewLoanOnLocalStorage = (newLoan) => {
  const loans = getLoansLocalStorage();
  const { frequency, startDate } = newLoan;
  newLoan.loanId = loans.length + 1;
  newLoan.dueDate = increaseDateBy(frequency, startDate, 1);
  setLoanLocalStorage([...loans, newLoan]);
};

export const getLoansByClient = (loans, selectedClient) => {
  if (loans.length === 0) {
    return;
  }
  return loans.filter((loan) => loan.clientId === selectedClient.clientId);
};

export const formatCurrency = (number) => {
  let numberFormated = new Intl.NumberFormat("en-US", {
    maximumSignificantDigits: 2,
  }).format(number);
  return numberFormated;
};
