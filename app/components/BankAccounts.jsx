"use client";
import { useState, useEffect } from "react";
import { BsBank, BsTrash } from "react-icons/bs";

const BankAccounts = () => {
    // state to show or hide form
    const [showForm, setShowForm] = useState(false);

    // Default accounts if no localStorage data is available
    const defaultAccounts = [
        { bankName: "CITI Bank", id: "458664893", cash: 541204 },
        { bankName: "Chase Bank", id: "458689910", cash: 450000 },
        { bankName: "Yes Bank", id: "458621234", cash: 325000 },
    ];

    // state to set account on localstorage
    const [newAccount, setNewAccount] = useState({
        bankName: "",
        id: "",
        cash: "",
    });

    // Load accounts from localStorage or set default accounts
    const [accounts, setAccounts] = useState([]);

    useEffect(() => {
        if (typeof window !== "undefined") {
            const storedAccounts = localStorage.getItem("bankAccounts");
            setAccounts(storedAccounts ? JSON.parse(storedAccounts) : defaultAccounts);
        }
    }, []);

    // Save accounts to localStorage whenever accounts state changes
    useEffect(() => {
        if (typeof window !== "undefined") {
            localStorage.setItem("bankAccounts", JSON.stringify(accounts));
        }
    }, [accounts]);

    // Add accounts to localstorage
    const handleAddAccount = () => {
        setAccounts([...accounts, newAccount]);
        setNewAccount({ bankName: "", id: "", cash: "" });
    };

    // Toggle the form show or hide
    const handleAddNew = () => {
        setShowForm(!showForm);
    };

    // Delete account data from localstorage
    const handleDeleteAccount = (idxToDelete) => {
        const updatedAccounts = accounts.filter((_, idx) => idx !== idxToDelete);
        setAccounts(updatedAccounts);
    };

    
    return (
        <div>
            <div className="border flex lg:inline-block mt-2 rounded-lg bg-[#f9f9f9]">
                <button className="text-lg 2xl:text-xl bg-white font-medium px-6  py-3 border-[3px]  rounded-lg">Bank Accounts</button>
                <button className="text-lg 2xl:text-xl font-medium px-6  py-3 border-1  rounded-lg">Bank Cards</button>
                <button className="text-lg 2xl:text-xl font-medium px-6  py-3 border-1  rounded-lg">Bank Statement</button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 2xl:my-10 my-5 gap-5 2xl:gap-10">
                {accounts.map((item, idx) => (
                    <div className="relative" key={idx}>
                        <div className="border p-4 rounded-lg py-4 2xl:py-6">
                            <h3 className="text-lg font-semibold">{item.bankName}</h3>
                            <p>A/C (item.id)</p>
                            <p className="text-2xl 2xl:text-4xl py-3 2xl:py-5 font-bold">$ {item.cash}</p>
                            <span className="p-2 absolute text-purple-600 top-5 right-5 rounded-full bg-purple-600/30">
                                <BsBank className="text-lg 2xl:text-xl" />
                            </span>

                            <button
                                onClick={() => handleDeleteAccount(idx)}
                                className="flex items-center mt-4 text-red-600 bg-red-100 hover:bg-red-200 py-2 px-3 rounded-lg transition-colors duration-200"
                            >
                                <BsTrash className="mr-2" /> Delete
                            </button>
                        </div>
                    </div>
                ))}

                <div className="border p-4 text-lg 2xl:text-xl text-center font-semibold rounded-lg py-6">
                    <button onClick={handleAddNew} className="flex items-center gap-2 text-purple-600">
                        <span className="text-2xl">+</span> Add New
                    </button>

                    <div
                        className={`overflow-hidden transition-all duration-300 ease-in-out ${showForm ? "max-h-[500px]" : "max-h-0"
                            }`}
                    >
                        {showForm && (
                            <div className="mt-4 p-4 bg-white shadow-lg rounded-lg">
                                <input
                                    type="text"
                                    placeholder="Bank Name"
                                    value={newAccount.bankName}
                                    onChange={(e) => setNewAccount({ ...newAccount, bankName: e.target.value })}
                                    className="border mt-2 p-2 w-full"
                                />
                                <input
                                    type="text"
                                    placeholder="Account ID"
                                    value={newAccount.id}
                                    onChange={(e) => setNewAccount({ ...newAccount, id: e.target.value })}
                                    className="border mt-2 p-2 w-full"
                                />
                                <input
                                    type="number"
                                    placeholder="Cash Amount"
                                    value={newAccount.cash}
                                    onChange={(e) => setNewAccount({ ...newAccount, cash: e.target.value })}
                                    className="border mt-2 p-2 w-full"
                                />
                                <button onClick={handleAddAccount} className="mt-4 bg-purple-600 text-white py-2 px-4 rounded">
                                    Add Account
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BankAccounts;
