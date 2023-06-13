function ClientLoans() {
  return (
    <div className="relative rounded-xl overflow-auto">
      <div className="shadow-sm overflow-hidden my-8">
        <table className="border-collapse table-auto w-full text-sm">
          <thead>
            <tr className="dark:bg-slate-200">
              <th
                className="border-b dark:border-slate-600 text-xl p-4 pl-8 pt-0 pb-3 text-black text-center"
                colspan="5"
              >
                Client's Name
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
                Due date
              </th>
            </tr>
          </thead>
          <tbody className="bg-white dark:bg-slate-800">
            <tr>
              <td className="border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400">
                #1
              </td>
              <td className="border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400">
                $100
              </td>
              <td className="border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400">
                $80
              </td>
              <td className="border-b border-slate-100 dark:border-slate-700 p-4 pr-8 text-slate-500 dark:text-slate-400">
                $8
              </td>
              <td className="border-b border-slate-100 dark:border-slate-700 p-4 pr-8 text-slate-500 dark:text-slate-400">
                April 15th
              </td>
            </tr>
            <tr>
              <td className="border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400">
                #2
              </td>
              <td className="border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400">
                $100
              </td>
              <td className="border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400">
                $100
              </td>
              <td className="border-b border-slate-100 dark:border-slate-700 p-4 pr-8 text-slate-500 dark:text-slate-400">
                $10
              </td>
              <td className="border-b border-slate-100 dark:border-slate-700 p-4 pr-8 text-slate-500 dark:text-slate-400">
                May 13th
              </td>
            </tr>
            <tr>
              <td className="border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400">
                #3
              </td>
              <td className="border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400">
                $100
              </td>
              <td className="border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400">
                $70
              </td>
              <td className="border-b border-slate-100 dark:border-slate-700 p-4 pr-8 text-slate-500 dark:text-slate-400">
                $7
              </td>
              <td className="border-b border-slate-100 dark:border-slate-700 p-4 pr-8 text-slate-500 dark:text-slate-400">
                June 15th
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ClientLoans;
