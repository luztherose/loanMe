import React from "react";
import { useState, useEffect } from "react";

export const setClientLocalStorage = (clients) => {
  localStorage.setItem("clients", JSON.stringify(clients));
};

export const setLoanLocalStorage = (loans) => {
  localStorage.setItem("loans", JSON.stringify(loans));
};

export const saveNewLoanOnLocalStorage = (newLoan) => {
  const loans = getLoansLocalStorage();
  newLoan.loanId = newLoan.loanId + 1;
  setLoanLocalStorage([...loans, newLoan]);
};

export const getClientsLocalStorage = () =>
  JSON.parse(localStorage.getItem("clients") || "[]");

export const getLoansLocalStorage = () =>
  JSON.parse(localStorage.getItem("loans") || "[]");

export const getAllClients = () =>
  JSON.parse(localStorage.getItem("clients") || "[]");

export const getLoansByClient = (loans, selectedClient) => {
  if (loans.length === 0) {
    return;
  }
  return loans.filter((loan) => loan.clientId === selectedClient.clientId);
};
