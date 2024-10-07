import Image from "next/image";
import BankingNav from "./components/BankingNav";
import BankAccounts from "./components/BankAccounts";
import Transaction from "./components/Transaction";

export default function Home() {
  return (
    <div className="p-4 lg:p-10">
    <BankingNav></BankingNav>
    <BankAccounts></BankAccounts>
    <Transaction></Transaction>
    </div>
  );
}
