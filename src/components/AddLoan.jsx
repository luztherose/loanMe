import React from "react";
import { useState, useEffect } from "react";
import { getClientsLocalStorage, setLoanLocalStorage } from "../helpers";

function AddLoan({ loan, onChange, onLoan } = props) {
  const { clientName, loanAmount, interestRate, startDate, frequency, note } =
    loan;
  const [loans, setLoans] = useState([]);
  const [allClients, setAllClients] = useState(getClientsLocalStorage());

  useEffect(() => {
    setAllClients(getClientsLocalStorage());
    setLoans(JSON.parse(localStorage.getItem("loans") || "[]"));
  }, []);

  const onSubmitLoan = (e) => {
    e.preventDefault();

    let newLoans = [...loans, loan];
    setLoans(newLoans);
    setLoanLocalStorage(newLoans);

    onLoan({
      clientName: "",
      loanAmount: "",
      interestRate: "",
      startDate: "",
      frequency: "",
      note: "",
    });
  };

  return (
    <form className="py-12" onSubmit={onSubmitLoan}>
      <h2 className="text-center text-2xl mb-4 font-display text-black">
        Add Loan
      </h2>
      <div className="mt-8 max-w-md my-0 mx-auto">
        <div className="grid grid-cols-1 gap-6">
          <label className="block">
            <span className="text-gray-700">Client</span>
            <select
              value={clientName}
              className="
                    block
                    w-full
                    mt-1
                    cursor-pointer
                    rounded-md
                    bg-gray-100
                    border-transparent
                    focus:border-gray-500 focus:bg-white focus:ring-0"
              name="clientName"
              id="clientName"
              onChange={onChange}
            >
              {allClients.map((client, index) => (
                <option key={index}>{client.name}</option>
              ))}
            </select>
          </label>
          <label className="block">
            <span className="text-gray-700">Loan amount</span>
            <input
              type="number"
              value={loanAmount}
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
              name="loanAmount"
              id="loanAmount"
              onChange={onChange}
            />
          </label>
          <label className="block">
            <span className="text-gray-700">Interest rate</span>
            <input
              type="number"
              value={interestRate}
              className="
                    mt-1
                    block
                    w-full
                    rounded-md
                    bg-gray-100
                    border-transparent
                    focus:border-gray-500 focus:bg-white focus:ring-0
                  "
              placeholder="0 %"
              name="interestRate"
              id="interestRate"
              onChange={onChange}
            />
          </label>
          <label className="block">
            <span className="text-gray-700">Start Date</span>
            <input
              type="date"
              value={startDate}
              className="
                    mt-1
                    block
                    w-full
                    rounded-md
                    bg-gray-100
                    border-transparent
                    focus:border-gray-500 focus:bg-white focus:ring-0
                  "
              name="startDate"
              id="startDate"
              onChange={onChange}
            />
          </label>
          <label className="block">
            <span className="text-gray-700">Frequency?</span>
            <select
              value={frequency}
              className="
                    block
                    w-full
                    mt-1
                    rounded-md
                    cursor-pointer
                    bg-gray-100
                    border-transparent
                    focus:border-gray-500 focus:bg-white focus:ring-0
                  "
              name="frequency"
              id="frequency"
              onChange={onChange}
            >
              <option>Monthly</option>
              <option>Bi-Weekly</option>
              <option>Yearly</option>
            </select>
          </label>
          <label className="block">
            <span className="text-gray-700">Additional details</span>
            <textarea
              value={note}
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
              name="note"
              id="note"
              onChange={onChange}
            ></textarea>
          </label>
          <div className="block">
            <div className="mt-2">
              <div>
                <input
                  type="submit"
                  value="Save"
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
                  onChange={onChange}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}

export default AddLoan;
