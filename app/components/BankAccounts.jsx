import { BsBank } from "react-icons/bs";

const BankAccounts = () => {


    const AccountDetails = [
        {
            bankName: "CITI Bank",
            id: "**********6893",
            cash: 541204,
        },
        {
            bankName: "Chase Bank",
            id: "**********8910",
            cash: 450000,
        },
        {
            bankName: "Yes Bank",
            id: "**********1234",
            cash: 325000,
        },
    ];

    return (
        <div>
            <div className="border flex lg:inline-block mt-2 rounded-lg bg-[#f9f9f9]">
                <button className="text-lg 2xl:text-xl bg-white font-medium px-6  py-3 border-[3px]  rounded-lg">Bank Accounts </button>
                <button className="text-lg 2xl:text-xl font-medium px-6  py-3 border-1  rounded-lg">Bank Cards </button>
                <button className="text-lg 2xl:text-xl font-medium px-6  py-3 border-1  rounded-lg">Bank Statement </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 2xl:my-10 my-5 gap-5 2xl:gap-10">

                {
                    AccountDetails?.map((item, idx) => <div className="relative">
                        <div key={idx} className="border p-4 rounded-lg py-4 2xl:py-6">
                            <h3 className="text-lg font-semibold">{item?.bankName}</h3>
                            <p>A/C  {item?.id}</p>
                            <p className="text-2xl 2xl:text-4xl py-3 2xl:py-5 font-bold">$ {item?.cash}</p>
                            <span className="p-2 absolute text-purple-600 top-5 right-5 rounded-full bg-purple-600/30">
                                <BsBank className="text-lg 2xl:text-xl" />

                            </span>
                        </div>
                    </div>)
                }
            <div  className="border p-4 text-lg 2xl:text-xl text-center font-semibold rounded-lg py-6">
                          <h1 className="flex text-purple-600 items-center justify-center gap-2"> <span className="text-2xl">+</span>Add New </h1>
                        </div>
            </div>
        </div>
    );
};

export default BankAccounts;