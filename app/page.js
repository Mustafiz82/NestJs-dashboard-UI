import Image from "next/image";
import BankingNav from "./components/BankingNav";
import BankAccounts from "./components/BankAccounts";

export default function Home() {
  return (
    <div className="p-10">
    <BankingNav></BankingNav>
    <BankAccounts></BankAccounts>
    </div>
  );
}
