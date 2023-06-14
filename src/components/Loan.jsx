import Header from "./Header";
import ClientForm from "./ClientForm";
import AddLoan from "./AddLoan";
import ClientLoans from "./ClientLoans";

function Loan() {
  return (
    <>
      <Header />
      <ClientForm />
      <AddLoan />
      <ClientLoans />
    </>
  );
}

export default Loan;
