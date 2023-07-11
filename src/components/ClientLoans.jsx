import React from "react";
import { useState, useEffect } from "react";
import { formatCurrency } from "../utils/loanHelpers";

function ClientLoans({ client, loans } = props) {
  const { name } = client;
  if (loans == undefined || loans.length == 0) return;
  return (
    <div className="relative rounded-xl overflow-auto">
      <div className="shadow-sm overflow-hidden my-8">
        <table className="border-collapse table-auto w-full text-sm">
          <thead>
            <tr className="dark:bg-slate-200">
              <th
                className="border-b dark:border-slate-600 text-xl p-4 pl-8 pt-0 pb-3 text-black text-center"
                colSpan="6"
              >
                {name}
              </th>
            </tr>
            <tr className="dark:bg-slate-400">
              <th className="border-b dark:border-slate-600 font-medium p-4 pl-8 pt-0 pb-3 text-slate-800 dark:text-slate-200 text-left">
                Loan ID
              </th>
              <th className="border-b dark:border-slate-600 font-medium p-4 pt-0 pb-3 text-slate-800 dark:text-slate-200 text-left">
                Inicial Amount
              </th>
              <th className="border-b dark:border-slate-600 font-medium p-4 pt-0 pb-3 text-slate-800 dark:text-slate-200 text-left">
                Actual Amount
              </th>
              <th className="border-b dark:border-slate-600 font-medium p-4 pr-8 pt-0 pb-3 text-slate-800 dark:text-slate-200 text-left">
                Payment
              </th>
              <th className="border-b dark:border-slate-600 font-medium p-4 pr-8 pt-0 pb-3 text-slate-800 dark:text-slate-200 text-left">
                Start Date
              </th>
              <th className="border-b dark:border-slate-600 font-medium p-4 pr-8 pt-0 pb-3 text-slate-800 dark:text-slate-200 text-left">
                Due date
              </th>
            </tr>
          </thead>
          <tbody className="bg-white dark:bg-slate-800">
            {loans.map((loan, index) => {
              const { loanId, loanAmount, startDate, dueDate, interestRate } =
                loan;
              return (
                <tr key={index}>
                  <td className="border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400">
                    {loanId}
                  </td>
                  <td className="border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400">
                    {formatCurrency(loanAmount)}
                  </td>
                  <td className="border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400">
                    {formatCurrency(loanAmount)}
                  </td>
                  <td className="border-b border-slate-100 dark:border-slate-700 p-4 pr-8 text-slate-500 dark:text-slate-400">
                    {formatCurrency(
                      (Number(loanAmount) * Number(interestRate)) / 100
                    )}
                  </td>
                  <td className="border-b border-slate-100 dark:border-slate-700 p-4 pr-8 text-slate-500 dark:text-slate-400">
                    {startDate}
                  </td>
                  <td className="border-b border-slate-100 dark:border-slate-700 p-4 pr-8 text-slate-500 dark:text-slate-400">
                    {dueDate}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ClientLoans;
