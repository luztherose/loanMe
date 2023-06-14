import React from "react";
import { useState, useEffect } from "react";

export const setClientLocalStorage = (clients, client, setClients) => {
    setClients([...clients, client]);
    localStorage.setItem("clients", JSON.stringify(clients));
  };