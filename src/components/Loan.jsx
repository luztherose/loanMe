import ClientForm from "./ClientForm";

function Loan() {
  return (
    <>
      <div className="h-full p-8 text-slate-800 bg-gradient-to-r from-violet-500 to-fuchsia-500">
        <h1 className="text-center text-5xl mb-4 font-display text-white">
          LoanMe App
        </h1>
      </div>
      <ClientForm />
    </>
  );
}

export default Loan;
