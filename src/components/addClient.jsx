import React from "react";
import { useState, useEffect } from "react";
import { setClientLocalStorage, getAllClients } from "../helpers";

function AddClient() {
  const [client, setClient] = useState({
    clientId: "",
    name: "",
    governmentId: "",
    email: "",
    phone: "",
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
        setClient({ ...client, governmentId, clientId: governmentId });
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

  const { name, governmentId, email, phone, note } = client;
  const [clients, setClients] = useState([]);

  useEffect(() => {
    setClients(getAllClients());
  }, []);

  const onSubmitClient = (e) => {
    e.preventDefault();

    let newClients = [...clients, client];
    setClients(newClients);
    setClientLocalStorage(newClients);

    setClient({
      clientId: "",
      name: "",
      governmentId: "",
      email: "",
      phone: "",
      note: "",
    });
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
              onChange={handleClientInfo}
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
              onChange={handleClientInfo}
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
              onChange={handleClientInfo}
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
              onChange={handleClientInfo}
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
              onChange={handleClientInfo}
            ></textarea>
          </label>
          <div className="block">
            <div className="mt-2">
              <div>
                <input
                  type="submit"
                  value="Add Client"
                  className="
                        px-4 
                        py-2 
                        font-semibold 
                        text-sm
                        bg-gray-700
                        text-white 
                        rounded-full 
                        shadow-sm
                        cursor-pointer"
                  onChange={handleClientInfo}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}

export default AddClient;
