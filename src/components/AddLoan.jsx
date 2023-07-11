import React from "react";
import { useState } from "react";
import SaveButton from "./SaveButton";

function AddLoan({ clients, onLoanSave } = props) {
  const DEFAULT_LOAN = {
    loanId: 0,
    clientId: "",
    clientName: "",
    loanAmount: "",
    interestRate: "",
    startDate: "",
    frequency: "Monthly",
    note: "",
  };

  const [loan, setLoan] = useState(DEFAULT_LOAN);

  const { clientName, loanAmount, interestRate, startDate, frequency, note } =
    loan;

  const handleClientChange = (e) => {
    let clientId = e.target.value;
    let client = clients.find((element) => element.clientId == clientId);
    setLoan({
      ...loan,
      clientName: client.clientName,
      clientId,
    });
  };

  const onFieldChange = (e) => {
    let field = e.target.name;
    let value = e.target.value;
    const newLoan = { ...loan };
    newLoan[field] = value;
    setLoan(newLoan);
  };

  const onSubmitLoan = (e) => {
    e.preventDefault();

    const { clientName, ...newLoan } = loan;
    onLoanSave(newLoan);

    setLoan(DEFAULT_LOAN);
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
              required
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
              onChange={handleClientChange}
            >
              <option value="">Select Client</option>
              {clients.map((client, index) => (
                <option key={index} value={client.clientId}>
                  {client.name}
                </option>
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
              onChange={onFieldChange}
              required
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
              onChange={onFieldChange}
              required
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
              onChange={onFieldChange}
              required
            />
          </label>
          <label className="block">
            <span className="text-gray-700">Frequency</span>
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
              onChange={onFieldChange}
              required
            >
              <option value="">Select</option>
              <option value="monthly">Monthly</option>
              <option value="bi-weekly">Bi-Weekly</option>
              <option value="yearly">Yearly</option>
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
              onChange={onFieldChange}
            ></textarea>
          </label>
          <SaveButton value="Save Loan" />
        </div>
      </div>
    </form>
  );
}

export default AddLoan;
