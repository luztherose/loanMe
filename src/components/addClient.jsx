import React from "react";
import { useState, useEffect } from "react";
import {
  setClientLocalStorage,
  getClientsLocalStorage,
} from "../utils/clientHelpers";

import SaveButton from "./SaveButton";

function AddClient({ onClientSave }) {
  const DEFAULT_CLIENT = {
    clientId: "",
    name: "",
    governmentId: "",
    email: "",
    phone: "",
    note: "",
  };
  const [client, setClient] = useState(DEFAULT_CLIENT);

  const { name, governmentId, email, phone, note } = client;

  const handleGovernmentIdOnChange = (e) => {
    let governmentId = e.target.value;
    const newClient = { ...client, governmentId, clientId: governmentId };

    setClient(newClient);
  };

  const onFieldChange = (e) => {
    let field = e.target.name;
    let value = e.target.value;
    const newClient = { ...client };
    newClient[field] = value;
    setClient(newClient);
  };

  const onSubmitClient = (e) => {
    e.preventDefault();

    onClientSave(client);

    setClient(DEFAULT_CLIENT);
  };

  return (
    <form className="py-12" onSubmit={onSubmitClient}>
      <h2 className="text-center text-2xl mb-4 font-display text-black">
        Client's Information
      </h2>
      <div className="mt-8 max-w-md my-0 mx-auto">
        <div className="grid grid-cols-1 gap-6">
          <label className="block">
            <span className="text-gray-700">Full Name</span>
            <input
              type="text"
              value={name}
              id="name"
              name="name"
              className="
                mt-1
                block
                w-full
                rounded-md
                bg-gray-100
                border-transparent
                focus:border-gray-500 focus:bg-white focus:ring-0
              "
              placeholder="Jonh Smith"
              onChange={onFieldChange}
              required
            />
          </label>
          <label className="block">
            <span className="text-gray-700">Goverment ID</span>
            <input
              type="text"
              value={governmentId}
              id="governmentId"
              name="governmentId"
              className="
                mt-1
                block
                w-full
                rounded-md
                bg-gray-100
                border-transparent
                focus:border-gray-500 focus:bg-white focus:ring-0
              "
              placeholder=""
              onChange={handleGovernmentIdOnChange}
              required
            />
          </label>
          <label className="block">
            <span className="text-gray-700">Email address</span>
            <input
              type="email"
              value={email}
              id="email"
              name="email"
              className="
                mt-1
                block
                w-full
                rounded-md
                bg-gray-100
                border-transparent
                focus:border-gray-500 focus:bg-white focus:ring-0
              "
              placeholder="john@example.com"
              onChange={onFieldChange}
              required
            />
          </label>
          <label className="block">
            <span className="text-gray-700">Phone</span>
            <input
              type="tel"
              value={phone}
              id="phone"
              name="phone"
              className="
                mt-1
                block
                w-full
                rounded-md
                bg-gray-100
                border-transparent
                focus:border-gray-500 focus:bg-white focus:ring-0
              "
              placeholder="555-555-5555"
              onChange={onFieldChange}
              required
            />
          </label>
          <label className="block">
            <span className="text-gray-700">Additional details</span>
            <textarea
              value={note}
              id="note"
              name="note"
              className="
                mt-1
                block
                w-full
                rounded-md
                bg-gray-100
                border-transparent
                focus:border-gray-500 focus:bg-white focus:ring-0
              "
              rows="3"
              onChange={onFieldChange}
            ></textarea>
          </label>
          <SaveButton value="Save Client" />
        </div>
      </div>
    </form>
  );
}

export default AddClient;
