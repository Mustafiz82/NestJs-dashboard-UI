"use client"
import { useEffect, useRef, useState } from 'react';
import { FaArrowUpLong, FaArrowDownLong, FaTabletButton } from "react-icons/fa6";
import { CiMenuKebab } from "react-icons/ci";
import { TransectionData } from '../Data/TransectionData';

const Transaction = () => {

    //  function to change date formate
    const formatDate = (dateString) => {
        const options = { day: 'numeric', month: 'short', year: '2-digit' };
        const date = new Date(dateString);
        return date.toLocaleDateString('en-GB', options).replace(',', '');
    };



    const [currentPage, setCurrentPage] = useState(0) //state to handle pagination 

    // state to show filter date on recent Transaction
    const [date, setDate] = useState(`12 Month (${formatDate(new Date(new Date().setDate(new Date().getDate() - 365)))} - ${formatDate(new Date())})`);

    //state for sorting data by date acceding and descending
    const [sortDecendingOrder, setSortDecendingOrder] = useState(true)

    // state to set data in a new state for sorting and filtering
    const [TransactionDataArray, setTransectionDataArray] = useState([...TransectionData].sort((a, b) => new Date(b.date) - new Date(a.date)) || [])




    // funciton to sort the data by Date
    const handleSortData = () => {

        setSortDecendingOrder(!sortDecendingOrder)

        if (sortDecendingOrder) {
            return TransactionDataArray.sort((a, b) => new Date(b.date) - new Date(a.date));

        }
        return TransactionDataArray.sort((a, b) => new Date(a.date) - new Date(b.date));


    }

    // function to handle filter with date (data for specefic period of time)
    const handlefilterData = (day) => {

        setCurrentPage(0)
        setDate(`${day == 365 ? "12" : day} ${day == 365 ? "Month" : "Days"} (${formatDate(new Date(new Date().setDate(new Date().getDate() - day)))} - ${formatDate(new Date())})`)


        const today = new Date();
        const cutoffDate = new Date();
        cutoffDate.setDate(today.getDate() - day);
        console.log(day)
        const filteredData = TransectionData.filter(transaction => {
            const transactionDate = new Date(transaction.date); // Convert to Date object
            return transactionDate >= cutoffDate && transactionDate <= today;
        });
        setTransectionDataArray(filteredData)

    }


    // paginaiton ------------------------------

    const itemPerPage = 10
    const numberOfPage = Math.ceil(TransactionDataArray?.length / itemPerPage)
    const startIndex = currentPage * itemPerPage
    const endIndex = startIndex + itemPerPage


    const pages = []
    for (let i = 0; i < numberOfPage; i++) {
        pages.push(i)
    }




    const [selectedDate, setSelectedDate] = useState('');
    console.log(selectedDate)


    const handleChange = (e) => {
        setCurrentPage(0)
        setSelectedDate(e.target.value);
        setDate(`1 Day (${formatDate(e.target.value)})`)

        const date = new Date();
        console.log(e.target.value)

        const filteredData = TransectionData.filter(transaction => {
            return transaction.date == e.target.value
        });

        setTransectionDataArray(filteredData)
        console.log(filteredData)
    };


    return (<>
        <div className='flex  flex-col lg:flex-row justify-between items-center'>
            <div>

                <div className="flex mb-5  flex-col lg:flex-row items-center gap-2">
                    <h1 className='text-xl  lg:text-2xl font-semibold'>Recent Transection</h1>
                    <p>{date} </p>
                </div>

            </div>
            <div>
                <div className="join grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 justify-center text-sm border-2">
                    <button onClick={() => handlefilterData(365)} className="btn bg-white border-2 join-item">12 Month</button>
                    <button onClick={() => handlefilterData(30)} className="btn bg-white border-2 join-item">30 Days</button>
                    <button onClick={() => handlefilterData(7)} className="btn bg-white border-2 join-item">7 Days</button>
                    <button onClick={() => handlefilterData(1)} className="btn bg-white border-2 join-item">24 Hours</button>
                    <button className="btn bg-white border-2 join-item">
                        <div className='overflow-hidden'>
                            <input
                                type="date"
                                value={date}
                                onChange={handleChange}
                                className="date z-20 mr-[-140px] border-none outline-none"
                            />

                        </div><span className=''>Select Dates</span></button>
                </div>
            </div>
        </div>

        <div className="overflow-x-auto border-2 mt-6">
            <table className="table table-sm 2xl:table-lg">
                {/* head */}
                <thead>
                    <tr>
                        <th className='flex items-center gap-2'>
                            <label>
                                <input type="checkbox" className="checkbox checkbox-sm rounded-none" />
                            </label>
                            <h1 onClick={handleSortData} className='flex cursor-pointer gap-1 '>Date <span> {
                                sortDecendingOrder ? <FaArrowUpLong /> : <FaArrowDownLong />}
                            </span></h1>
                        </th>
                        <th className="text-left p-4">Merchant Name</th>
                        <th className="text-left p-4">Description</th>
                        <th className="text-left p-4">Transaction ID</th>
                        <th className="text-left p-4">Transaction Type</th>
                        <th className="text-left p-4">Amount</th>
                        <th className="text-left p-4">Status</th>
                        <th className="text-left p-4">Categories </th>
                        <th className="text-left p-4">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        TransactionDataArray?.slice(startIndex, endIndex).map(item => <tr>
                            <th className='flex items-center gap-2'>
                                <label>
                                    <input type="checkbox" className="checkbox checkbox-sm rounded-none" />
                                </label>

                                <div>
                                    <div className="font-bold">{formatDate(item.date)}</div>
                                    <div className="text-sm opacity-50">{item?.time}</div>
                                </div>
                            </th>
                            <td>
                                {item?.merchantName}
                            </td>
                            <td>
                                {item?.description}
                                <div className="text-sm opacity-50">{item?.some}</div>
                            </td>
                            <td>{item?.txnId}</td>
                            <th >
                                <span className={`p-2 px-4 border rounded-full ${item?.transactionType == "Income" ? " bg-teal-100 text-teal-700 " : "bg-red-200 text-red-800"}`}>
                                    {item?.transactionType}
                                </span>
                            </th>
                            <td>{item?.amount}</td>
                            <th >
                                <span
                                    className={`p-2 px-4 border rounded-full ${item?.status === 'Pending'
                                        ? 'bg-yellow-100 text-yellow-700'
                                        : item?.status === 'Inprogress'
                                            ? 'bg-teal-100 text-teal-700'
                                            : item?.status === 'Unreconciled'
                                                ? 'bg-red-200 text-red-800'
                                                : item?.status === 'Reconciled'
                                                    ? 'bg-green-100 text-green-700'
                                                    : 'bg-gray-100 text-gray-700'
                                        }`}
                                >
                                    {item?.status}
                                </span>

                            </th>
                            <td className='space-x-2'>
                                {
                                    item?.categories?.map(item => <span className='border p-2 rounded-md'>{item}</span>)
                                }

                            </td>
                            <td><CiMenuKebab />
                            </td>
                        </tr>)

                    }



                </tbody>


            </table>

            <div className='flex flex-col md:flex-row min-h-14 w-full p-5 justify-between' >
                <div className={`text-md  ${TransactionDataArray?.length <= 0 ? "hidden" : ""}`}>page {currentPage + 1}  of {pages?.length}</div >
                <div className='text-md pr-12 flex gap-0 '>

                    {
                        TransactionDataArray?.length < 1 ? <p className='text-center'>No Transection Found </p> : ""
                    }

                    {
                        pages.map((page, idx) => <button key={page} onClick={() => setCurrentPage(page)} className={`btn rounded-none ${currentPage === page && "  bg-purple-400  text-white"}`} >{page + 1}</button>)
                    }

                </div >
            </div>

        </div></>
    );
};

export default Transaction;