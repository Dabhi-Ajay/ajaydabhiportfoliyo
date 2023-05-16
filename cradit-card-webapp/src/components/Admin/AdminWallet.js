import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import AdminCreditCards from './AdminCreditCards';
import AdminDebitCards from './AdminDebitCards';

function AdminWallet() {
    const [tab, setTab] = useState(1);
    return (
        <div className="wrapper min-h-full">
            <div className="flex items-center justify-between mb-10">
                <div className="flex items-center cursor-pointer">
                    <svg width="24" height="16" viewBox="0 0 24 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.65995 2.41586C8.0277 2.05138 8.03034 1.4578 7.66586 1.09005C7.30139 0.722305 6.7078 0.719657 6.34005 1.08414L4.09664 3.30762C3.25167 4.14505 2.56108 4.82949 2.07132 5.43932C1.56203 6.07348 1.19337 6.71716 1.09489 7.4898C1.0517 7.82858 1.0517 8.17142 1.09489 8.5102C1.19337 9.28284 1.56203 9.92652 2.07132 10.5607C2.56108 11.1705 3.25167 11.855 4.09665 12.6924L6.34005 14.9159C6.7078 15.2803 7.30138 15.2777 7.66586 14.9099C8.03034 14.5422 8.02769 13.9486 7.65995 13.5841L5.45624 11.4C4.56187 10.5136 3.94837 9.90353 3.53324 9.38662C3.39833 9.21863 3.29307 9.07075 3.21135 8.9375H22C22.5178 8.9375 22.9375 8.51777 22.9375 8C22.9375 7.48223 22.5178 7.0625 22 7.0625H3.21135C3.29308 6.92925 3.39833 6.78137 3.53324 6.61338C3.94837 6.09647 4.56187 5.48642 5.45624 4.6L7.65995 2.41586Z" fill="#0F172A" stroke="#0F172A" strokeLinecap="round" />
                    </svg>
                    <h3 className="text-yankeesBlue leading-8 pl-7">Johnson Doe Wallet</h3>
                </div>
                <div className="flex items-center space-x-4">
                    <Link to="../adminaddcard" className="btn-secondary flex items-center text-base py-2.5">
                        <svg className='mr-3' width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.6 1.6C8.6 1.26863 8.33137 1 8 1C7.66863 1 7.4 1.26863 7.4 1.6L7.4 7.4H1.6C1.26863 7.4 1 7.66863 1 8C1 8.33137 1.26863 8.6 1.6 8.6H7.4V14.4C7.4 14.7314 7.66863 15 8 15C8.33137 15 8.6 14.7314 8.6 14.4V8.6H14.4C14.7314 8.6 15 8.33137 15 8C15 7.66863 14.7314 7.4 14.4 7.4H8.6L8.6 1.6Z" fill="white" stroke="white" strokeLinecap="round" />
                        </svg>
                        Add Card
                    </Link>
                    <div className="flex items-center rounded-lg border-2 border-lightGray cursor-pointer px-5 py-2.5">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M22.75 12C22.75 11.5858 22.4142 11.25 22 11.25C21.5858 11.25 21.25 11.5858 21.25 12H22.75ZM18.001 4L17.5505 4.59962L18.001 4ZM20 5.99903L19.4004 6.44953L19.431 6.49029L19.4669 6.52653L20 5.99903ZM21.4069 0.996654C21.405 0.582444 21.0677 0.248159 20.6535 0.250007C20.2393 0.251856 19.905 0.589137 19.9069 1.00335L21.4069 0.996654ZM20.6657 2.98571L21.4157 2.98237V2.98237L20.6657 2.98571ZM16.9857 6.66571L16.9824 7.41571L16.9857 6.66571ZM15.0034 5.90686C14.5891 5.90501 14.2519 6.2393 14.25 6.65351C14.2482 7.06772 14.5824 7.405 14.9967 7.40685L15.0034 5.90686ZM20.2572 5.90267L20.8503 6.36169V6.36169L20.2572 5.90267ZM19.9027 6.25717L20.3617 6.85029L20.3617 6.85029L19.9027 6.25717ZM20.0912 6.09117L20.6215 6.6215L20.0912 6.09117ZM21.25 12C21.25 17.1086 17.1086 21.25 12 21.25V22.75C17.9371 22.75 22.75 17.9371 22.75 12H21.25ZM12 21.25C6.89137 21.25 2.75 17.1086 2.75 12H1.25C1.25 17.9371 6.06294 22.75 12 22.75V21.25ZM2.75 12C2.75 6.89137 6.89137 2.75 12 2.75V1.25C6.06294 1.25 1.25 6.06294 1.25 12H2.75ZM12 2.75C14.0836 2.75 16.0044 3.43804 17.5505 4.59962L18.4515 3.40038C16.6546 2.05032 14.4197 1.25 12 1.25V2.75ZM17.5505 4.59962C18.2508 5.12582 18.8742 5.74916 19.4004 6.44953L20.5996 5.54852C19.9886 4.73519 19.2648 4.01145 18.4515 3.40038L17.5505 4.59962ZM19.9069 1.00335L19.9157 2.98906L21.4157 2.98237L21.4069 0.996654L19.9069 1.00335ZM16.9891 5.91572L15.0034 5.90686L14.9967 7.40685L16.9824 7.41571L16.9891 5.91572ZM19.9157 2.98906C19.9193 3.79848 19.9206 4.34217 19.8757 4.75351C19.8324 5.14976 19.7542 5.32713 19.664 5.44365L20.8503 6.36169C21.1793 5.93661 21.3089 5.44728 21.3668 4.91635C21.4232 4.4005 21.4192 3.75651 21.4157 2.98237L19.9157 2.98906ZM16.9824 7.41571C17.7565 7.41916 18.4005 7.42317 18.9164 7.36684C19.4473 7.30886 19.9366 7.17926 20.3617 6.85029L19.4437 5.66404C19.3271 5.75421 19.1498 5.83243 18.7535 5.8757C18.3422 5.92062 17.7985 5.91933 16.9891 5.91572L16.9824 7.41571ZM19.664 5.44365C19.6321 5.4849 19.5976 5.52404 19.5608 5.56084L20.6215 6.6215C20.7031 6.5399 20.7795 6.45314 20.8503 6.36169L19.664 5.44365ZM19.5608 5.56084C19.524 5.59764 19.4849 5.63211 19.4437 5.66404L20.3617 6.85029C20.4531 6.77952 20.5399 6.7031 20.6215 6.6215L19.5608 5.56084ZM19.4669 6.52653L19.558 6.61867L20.6243 5.56367L20.5331 5.47152L19.4669 6.52653Z" fill="#2D264B" />
                            <path d="M12 9L12 11.6906C12 12.8176 12 13.3812 12.268 13.8453C12.5359 14.3094 13.024 14.5912 14 15.1547L14.5981 15.5" stroke="#2D264B" strokeWidth="1.5" strokeLinecap="round" />
                        </svg>
                        <span className="text-base font-extrabold text-yankeesBlue pl-3">Transaction History</span>
                    </div>
                    <div className="flex items-center rounded-lg border-2 border-lightGray cursor-pointer px-5 py-3">
                        {/* card view Icon */}
                        <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 0.25C0.585786 0.25 0.25 0.585786 0.25 1C0.25 1.41421 0.585786 1.75 1 1.75H15C15.4142 1.75 15.75 1.41421 15.75 1C15.75 0.585786 15.4142 0.25 15 0.25H1Z" fill="#1E293B" />
                            <path d="M4 6.25C3.58579 6.25 3.25 6.58579 3.25 7C3.25 7.41421 3.58579 7.75 4 7.75H12C12.4142 7.75 12.75 7.41421 12.75 7C12.75 6.58579 12.4142 6.25 12 6.25H4Z" fill="#1E293B" />
                            <path d="M6 12.25C5.58579 12.25 5.25 12.5858 5.25 13C5.25 13.4142 5.58579 13.75 6 13.75H10C10.4142 13.75 10.75 13.4142 10.75 13C10.75 12.5858 10.4142 12.25 10 12.25H6Z" fill="#1E293B" />
                        </svg>
                        {/* List view Icon */}
                        {/* <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4 10C4 11.1046 3.10457 12 2 12C0.895431 12 3.49691e-07 11.1046 3.49691e-07 10C3.49691e-07 8.89543 0.895431 8 2 8C3.10457 8 4 8.89543 4 10Z" fill="#1E293B" />
                            <path d="M12 10C12 11.1046 11.1046 12 10 12C8.89544 12 8 11.1046 8 10C8 8.89543 8.89544 8 10 8C11.1046 8 12 8.89543 12 10Z" fill="#1E293B" />
                            <path d="M20 10C20 11.1046 19.1046 12 18 12C16.8954 12 16 11.1046 16 10C16 8.89543 16.8954 8 18 8C19.1046 8 20 8.89543 20 10Z" fill="#1E293B" />
                            <path d="M4 2C4 3.10457 3.10457 4 2 4C0.895431 4 6.99382e-07 3.10457 6.99382e-07 2C6.99382e-07 0.89543 0.895431 0 2 0C3.10457 0 4 0.89543 4 2Z" fill="#1E293B" />
                            <path d="M12 2C12 3.10457 11.1046 4 10 4C8.89544 4 8.00001 3.10457 8.00001 2C8.00001 0.89543 8.89544 0 10 0C11.1046 0 12 0.89543 12 2Z" fill="#1E293B" />
                            <path d="M20 2C20 3.10457 19.1046 4 18 4C16.8954 4 16 3.10457 16 2C16 0.89543 16.8954 0 18 0C19.1046 0 20 0.89543 20 2Z" fill="#1E293B" />
                            <path d="M4 18C4 19.1046 3.10457 20 2 20C0.89543 20 0 19.1046 0 18C0 16.8954 0.89543 16 2 16C3.10457 16 4 16.8954 4 18Z" fill="#1E293B" />
                            <path d="M12 18C12 19.1046 11.1046 20 10 20C8.89544 20 8.00001 19.1046 8.00001 18C8.00001 16.8954 8.89544 16 10 16C11.1046 16 12 16.8954 12 18Z" fill="#1E293B" />
                            <path d="M20 18C20 19.1046 19.1046 20 18 20C16.8954 20 16 19.1046 16 18C16 16.8954 16.8954 16 18 16C19.1046 16 20 16.8954 20 18Z" fill="#1E293B" />
                        </svg> */}
                    </div>
                </div>
            </div>
            <div className="border-b-2 border-b-[#D7DFE9]">
                <div className="ml-14 space-x-1">
                    <button type="button" className={"inline-block font-extrabold text-base px-8 py-2 " + (tab === 1 ? "text-yankeesBlue  border-[#D7DFE9] rounded-tr-xl rounded-tl-xl translate-y-[2px] border-2  border-b-white" : "text-lightGray translate-y-[2px] border-transparent border-2")} data-tab="creditcard" onClick={() => setTab(1)}>Credit Card</button>
                    <button type="button" className={"inline-block font-extrabold text-base px-8 py-2 " + (tab === 2 ? "text-yankeesBlue  border-[#D7DFE9] rounded-tr-xl rounded-tl-xl translate-y-[2px]  border-2 border-b-white" : "text-lightGray translate-y-[2px] border-transparent border-2")} data-tab="Debitcard" onClick={() => setTab(2)}>Debit Card</button>
                </div>
            </div>
            {tab === 1 && <AdminCreditCards />}
            {tab === 2 && <AdminDebitCards />}
        </div>
    )
}

export default AdminWallet