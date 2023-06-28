import React from "react";
import { useState, useEffect } from "react";

export const setClientLocalStorage = (clients) => {
  localStorage.setItem("clients", JSON.stringify(clients));
};

export const getClientsLocalStorage = () =>
  JSON.parse(localStorage.getItem("clients") || "[]");

export const saveNewClientOnLocalStorage = (newClient) => {
  const clients = getClientsLocalStorage();
  setClientLocalStorage([...clients, newClient]);
};
