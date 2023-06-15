import React from "react";
import { useState, useEffect } from "react";

export const setClientLocalStorage = (clients) => {
  localStorage.setItem("clients", JSON.stringify(clients));
};

export const setLoanLocalStorage = (loans) => {
  localStorage.setItem("loans", JSON.stringify(loans));
};

export const getClientsLocalStorage = () =>
  JSON.parse(localStorage.getItem("clients") || "[]");

export const getLoansLocalStorage = () =>
  JSON.parse(localStorage.getItem("loans") || "[]");
