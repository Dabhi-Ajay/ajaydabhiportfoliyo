import React, { useState } from 'react'
import { Column } from 'primereact/column';
import DemoImage from "../../assets/images/profile.png"
import { DataTable } from 'primereact/datatable';

function Dashboard() {
    // eslint-disable-next-line
    const [dashboardTransaction, setDashboardTransaction] = useState([]);

    const columns = [
        {
            header: 'Payment To', field: (row) => {
                return <div className="flex">
                    <div className="w-12 h-12 rounded-full overflow-hidden">
                        <img src={DemoImage} alt="" className='w-full h-full overflow-hidden' />
                    </div>
                    <div className="pl-4">
                        <span className="text-lg font-bold text-[#2D3643] block">Olivia Smith</span>
                        <span className="text-sm text-yankeesBlue font-normal block">************8453</span>
                    </div>
                </div>
            },
        },
        {
            header: 'Payment From', field: (row) => {
                return <div className="flex">
                    <div className="w-12 h-12 rounded-full overflow-hidden">
                        <img src={DemoImage} alt="" className='w-full h-full overflow-hidden' />
                    </div>
                    <div className="pl-4">
                        <span className="text-lg font-bold text-[#2D3643] block">Olivia Smith</span>
                        <span className="text-sm text-yankeesBlue font-normal block">************8453</span>
                    </div>
                </div>
            },
        },
        {
            header: 'Payment Date', field: (row) => {
                return <div className="text-yankeesBlue text-lg font-semibold">
                    20,  Jan 2023
                </div>
            }
        },

        {
            header: 'Status', field: (row) => {
                return <div className="text-xs font-semibold text-[#097C69] bg-[#E2F8F5] rounded-lg px-3 py-2">Paid</div>
                // <div className="text-xs font-semibold text-[#F6A351] bg-[#FFF0E0] rounded-lg px-3 py-2">Pending</div> //pending box
            }
        },
        {
            header: 'Amount', field: (row) => {
                return <div className="text-yankeesBlue text-lg font-semibold">
                    20,  Jan 2023
                </div>
            }
        },
    ];
    return (
        <div className="wrapper min-h-full">
            <div className="flex items-center justify-start space-x-7">
                <div className="w-1/4">
                    <div className="bg-[#ed4d3714] border border-[#CBD5E1] py-7 px-11 rounded-xl">
                        <h2 className="text-[#ED4D37] mb-3">₹2,20,000</h2>
                        <span className="text-[#64748B] text-xl font-semibold whitespace-nowrap">Total Due Amount</span>
                    </div>
                </div>
                <div className="w-1/4">
                    <div className="bg-white border border-[#CBD5E1] py-7 px-11 rounded-xl">
                        <h2 className="text-yankeesBlue mb-3">₹20,000</h2>
                        <span className="text-[#64748B] text-xl font-semibold whitespace-nowrap">Total Unpaid Profit Amount</span>
                    </div>
                </div>
                <div className="w-1/4">
                    <div className="bg-[#F3F4F6] border border-[#CBD5E1] py-7 px-11 rounded-xl">
                        <h2 className="text-yankeesBlue mb-3">₹1,50,000</h2>
                        <span className="text-[#64748B] text-xl font-semibold whitespace-nowrap">Total Payment Paid</span>
                    </div>
                </div>
                <div className="w-1/4">
                    <div className="bg-[#F3F4F6] border border-[#CBD5E1] py-7 px-11 rounded-xl">
                        <h2 className="text-yankeesBlue mb-3">₹1,50,000</h2>
                        <span className="text-[#64748B] text-xl font-semibold whitespace-nowrap">Total Payment Paid</span>
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-between my-10">
                <h3 className="text-yankeesBlue leading-8">Transaction History</h3>
                <div className="flex items-center rounded-lg border-2 border-lightGray cursor-pointer px-5 py-3.5">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 4.25C5.58579 4.25 5.25 4.58578 5.25 5C5.25 5.41421 5.58579 5.75 6 5.75L14 5.75C14.4142 5.75 14.75 5.41421 14.75 5C14.75 4.58579 14.4142 4.25 14 4.25L6 4.25Z" fill="#94A3B8" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M4.47246 0.25C2.16114 0.25 0.25 2.07558 0.25 4.37307C0.25 5.53648 0.752889 6.64108 1.62728 7.41966L4.87987 10.3159C5.75613 11.0961 6.25 12.1925 6.25 13.336V17.5134C6.25 19.3745 8.38547 20.367 9.85896 19.3261L11.8002 17.9547C12.7061 17.3147 13.25 16.2855 13.25 15.1817V13.4521C13.25 12.2522 13.7936 11.107 14.7465 10.3238L18.2668 7.43032C19.2037 6.66027 19.75 5.52281 19.75 4.318C19.75 2.05092 17.8642 0.25 15.5842 0.25H4.47246ZM1.75 4.37307C1.75 2.94477 2.94821 1.75 4.47246 1.75H15.5842C17.0772 1.75 18.25 2.92011 18.25 4.318C18.25 5.06517 17.9116 5.78069 17.3144 6.27151L13.7941 9.165C12.5015 10.2274 11.75 11.7946 11.75 13.4521V15.1817C11.75 15.7872 11.4519 16.3642 10.9347 16.7295L8.99346 18.101C8.44746 18.4867 7.75 18.0779 7.75 17.5134V13.336C7.75 11.7567 7.0674 10.2552 5.87738 9.19561L2.62479 6.29941C2.06416 5.80021 1.75 5.10064 1.75 4.37307Z" fill="#94A3B8" />
                    </svg>

                    <span className="text-base font-extrabold text-lightGray pl-3">Filter</span>
                </div>
            </div>
            <DataTable value={dashboardTransaction}>
                {columns.map((col, i) => (

                    <Column key={col.field} field={col.field} header={col.header} />

                ))}
            </DataTable>
        </div>
    )
}

export default Dashboard