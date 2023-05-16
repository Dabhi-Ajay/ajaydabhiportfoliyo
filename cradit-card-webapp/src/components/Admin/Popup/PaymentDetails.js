import React from 'react'

function PaymentDetails({ handleClose }) {
    return (
        <div className='fixed inset-0 w-screen h-screen bg-[rgba(0,0,0,0.4)] flex backdrop-blur-[1px] z-50'>
            <div className="max-w-[1005px] w-full  m-auto bg-white rounded-3xl shadow-shadowbox p-11">
                <h2 className='flex justify-center'>Payment Details</h2>
                <form>
                    <span className="block text-yankeesBlue text-2xl font-bold py-6">Payment to</span>
                    <div className="w-full">
                        <div className="w-full flex space-x-6 mb-7">
                            <div className='w-1/2'>
                                <label htmlFor="" className="inline-block text-sm font-bold text-yankeesBlue mb-1">Holder Name</label>
                                <input type="text" name="" value="" className="input_box placeholder:text-[#94A3B8] placeholder:text-base" placeholder='Olivia Smith' readOnly />
                            </div>
                            <div className='w-1/2'>
                                <label htmlFor="" className="inline-block text-sm font-bold text-yankeesBlue mb-1">Card Number</label>
                                <input type="text" name="" value="" className="input_box placeholder:text-[#94A3B8] placeholder:text-base" placeholder='******8453' readOnly />
                            </div>
                        </div>
                        <div className="w-full flex space-x-6 mb-7">
                            <div className='w-1/2'>
                                <label htmlFor="" className="inline-block text-sm font-bold text-yankeesBlue mb-1">Bank Name</label>
                                <input type="text" name="" value="" className="input_box placeholder:text-[#94A3B8] placeholder:text-base" placeholder='Kotak Mahindra Bank' readOnly />
                            </div>
                            <div className='w-1/2'>
                                <div className="w-full flex space-x-6">
                                    <div className='w-1/2'>
                                        <label htmlFor="" className="inline-block text-sm font-bold text-yankeesBlue mb-1">Due Date</label>
                                        <input type="text" name="" value="" className="input_box placeholder:text-[#94A3B8] placeholder:text-base" placeholder='20, Jan 2022' readOnly />
                                    </div>
                                    <div className='w-1/2'>
                                        <label htmlFor="" className="inline-block text-sm font-bold text-yankeesBlue mb-1">Due Amount</label>
                                        <input type="text" name="" value="" className="input_box placeholder:text-[#94A3B8] placeholder:text-base" placeholder='$2,000' readOnly />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <span className="block text-yankeesBlue text-2xl font-bold pb-5">Payment to</span>
                    <div className="group relative mb-5">
                        <div className="flex items-center justify-between rounded-xl bg-white py-4 px-6 drop-shadow-vshadow mb-1 cursor-pointer">
                            <div className="flex items-center space-x-4">
                                <span className="text-xl text-darkGreen font-bold">Google Pay/*********8453</span>
                                <span className="text-[#94A3B8] text-base font-normal">20, Jan 2022</span>
                            </div>
                            <div className="flex items-center space-x-4">
                                <span className="text-xl text-darkGreen font-bold">$1000</span>
                                <span className="text-[#94A3B8] text-base font-normal">
                                    <svg width="13" height="6" viewBox="0 0 13 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12.0327 1.52796C12.3243 1.23376 12.3222 0.758893 12.028 0.467309C11.7338 0.175726 11.2589 0.177844 10.9673 0.472041L9.22 2.23501C8.51086 2.9505 8.02282 3.44131 7.6093 3.77341C7.2076 4.096 6.94958 4.20668 6.7185 4.23613C6.57341 4.25462 6.42659 4.25462 6.2815 4.23613C6.05042 4.20668 5.7924 4.09601 5.39071 3.77341C4.97718 3.44131 4.48914 2.95051 3.78 2.23501L2.03269 0.472042C1.74111 0.177845 1.26624 0.175726 0.972041 0.46731C0.677844 0.758894 0.675726 1.23376 0.967309 1.52796L2.74609 3.32269C3.41604 3.99866 3.96359 4.55114 4.45146 4.94294C4.95879 5.35037 5.47373 5.64531 6.09184 5.72409C6.36287 5.75864 6.63714 5.75864 6.90816 5.72409C7.52628 5.64531 8.04122 5.35037 8.54854 4.94294C9.03641 4.55114 9.58396 3.99867 10.2539 3.32269L12.0327 1.52796Z" fill="#1E293B" />
                                    </svg>
                                </span>
                            </div>
                        </div>
                        <div className="w-full bg-white absolute rounded-lg drop-shadow-md py-4 px-6 opacity-0 group-hover:opacity-100">
                            <div className="flex items-center justify-between pb-4 bg-white border-b-2 pt-2 border-[#CBD5E1]">
                                <div className="flex items-center space-x-4">
                                    <span className="text-xl text-darkGreen font-bold">Google Pay/*********8453</span>
                                    <span className="text-[#94A3B8] text-base font-normal">20, Jan 2022</span>
                                </div>
                                <div className="flex items-center space-x-4">
                                    <span className="text-xl text-darkGreen font-bold">$1000</span>
                                    <span className="text-[#94A3B8] text-base font-normal">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M12 1.25C9.37665 1.25 7.25 3.37665 7.25 6V6.25H4C3.58579 6.25 3.25 6.58579 3.25 7C3.25 7.41421 3.58579 7.75 4 7.75H20C20.4142 7.75 20.75 7.41421 20.75 7C20.75 6.58579 20.4142 6.25 20 6.25H16.75V6C16.75 3.37665 14.6234 1.25 12 1.25ZM12 2.75C13.7949 2.75 15.25 4.20507 15.25 6V6.25H8.75V6C8.75 4.20507 10.2051 2.75 12 2.75Z" fill="#F12828" />
                                            <path d="M5.74664 8.92906C5.70746 8.5167 5.34142 8.21418 4.92906 8.25336C4.5167 8.29254 4.21418 8.65858 4.25336 9.07094C4.34783 10.0652 4.51833 11.2903 4.73748 12.8651L5.01903 14.8881C5.28819 16.8229 5.44085 17.9201 5.77109 18.819C6.3857 20.4918 7.48205 21.8328 8.89206 22.4278C9.65773 22.7509 10.5335 22.7506 11.8373 22.75H12.1627C13.4665 22.7506 14.3423 22.7509 15.1079 22.4278C16.5179 21.8328 17.6143 20.4918 18.2289 18.819C18.5592 17.9201 18.7118 16.8229 18.981 14.8881L19.2625 12.8651C19.4817 11.2903 19.6522 10.0652 19.7466 9.07094C19.7858 8.65858 19.4833 8.29254 19.0709 8.25336C18.6586 8.21418 18.2925 8.5167 18.2534 8.92906C18.1623 9.88702 17.9965 11.08 17.7744 12.6761L17.512 14.5611C17.2215 16.6488 17.0884 17.5736 16.8209 18.3017C16.305 19.7058 15.4472 20.6566 14.5248 21.0458C14.0746 21.2358 13.5292 21.25 12 21.25C10.4708 21.25 9.92544 21.2358 9.47524 21.0458C8.55279 20.6566 7.69496 19.7058 7.17907 18.3017C6.91156 17.5736 6.77851 16.6488 6.48798 14.5611L6.22564 12.6761C6.00352 11.08 5.83766 9.88703 5.74664 8.92906Z" fill="#F12828" />
                                            <path d="M10.75 10C10.75 9.58579 10.4142 9.25 10 9.25C9.58579 9.25 9.25 9.58579 9.25 10V18C9.25 18.4142 9.58579 18.75 10 18.75C10.4142 18.75 10.75 18.4142 10.75 18V10Z" fill="#F12828" />
                                            <path d="M14.75 10C14.75 9.58579 14.4142 9.25 14 9.25C13.5858 9.25 13.25 9.58579 13.25 10V18C13.25 18.4142 13.5858 18.75 14 18.75C14.4142 18.75 14.75 18.4142 14.75 18V10Z" fill="#F12828" />
                                        </svg>

                                    </span>
                                </div>
                            </div>
                            <div className="flex items-center justify-between pb-4 bg-white border-b-2 pt-2 border-[#CBD5E1]">
                                <div className="flex items-center space-x-4">
                                    <span className="text-xl text-darkGreen font-bold">Google Pay/*********8453</span>
                                    <span className="text-[#94A3B8] text-base font-normal">20, Jan 2022</span>
                                </div>
                                <div className="flex items-center space-x-4">
                                    <span className="text-xl text-darkGreen font-bold">$500</span>
                                    <span className="text-[#94A3B8] text-base font-normal">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M12 1.25C9.37665 1.25 7.25 3.37665 7.25 6V6.25H4C3.58579 6.25 3.25 6.58579 3.25 7C3.25 7.41421 3.58579 7.75 4 7.75H20C20.4142 7.75 20.75 7.41421 20.75 7C20.75 6.58579 20.4142 6.25 20 6.25H16.75V6C16.75 3.37665 14.6234 1.25 12 1.25ZM12 2.75C13.7949 2.75 15.25 4.20507 15.25 6V6.25H8.75V6C8.75 4.20507 10.2051 2.75 12 2.75Z" fill="#F12828" />
                                            <path d="M5.74664 8.92906C5.70746 8.5167 5.34142 8.21418 4.92906 8.25336C4.5167 8.29254 4.21418 8.65858 4.25336 9.07094C4.34783 10.0652 4.51833 11.2903 4.73748 12.8651L5.01903 14.8881C5.28819 16.8229 5.44085 17.9201 5.77109 18.819C6.3857 20.4918 7.48205 21.8328 8.89206 22.4278C9.65773 22.7509 10.5335 22.7506 11.8373 22.75H12.1627C13.4665 22.7506 14.3423 22.7509 15.1079 22.4278C16.5179 21.8328 17.6143 20.4918 18.2289 18.819C18.5592 17.9201 18.7118 16.8229 18.981 14.8881L19.2625 12.8651C19.4817 11.2903 19.6522 10.0652 19.7466 9.07094C19.7858 8.65858 19.4833 8.29254 19.0709 8.25336C18.6586 8.21418 18.2925 8.5167 18.2534 8.92906C18.1623 9.88702 17.9965 11.08 17.7744 12.6761L17.512 14.5611C17.2215 16.6488 17.0884 17.5736 16.8209 18.3017C16.305 19.7058 15.4472 20.6566 14.5248 21.0458C14.0746 21.2358 13.5292 21.25 12 21.25C10.4708 21.25 9.92544 21.2358 9.47524 21.0458C8.55279 20.6566 7.69496 19.7058 7.17907 18.3017C6.91156 17.5736 6.77851 16.6488 6.48798 14.5611L6.22564 12.6761C6.00352 11.08 5.83766 9.88703 5.74664 8.92906Z" fill="#F12828" />
                                            <path d="M10.75 10C10.75 9.58579 10.4142 9.25 10 9.25C9.58579 9.25 9.25 9.58579 9.25 10V18C9.25 18.4142 9.58579 18.75 10 18.75C10.4142 18.75 10.75 18.4142 10.75 18V10Z" fill="#F12828" />
                                            <path d="M14.75 10C14.75 9.58579 14.4142 9.25 14 9.25C13.5858 9.25 13.25 9.58579 13.25 10V18C13.25 18.4142 13.5858 18.75 14 18.75C14.4142 18.75 14.75 18.4142 14.75 18V10Z" fill="#F12828" />
                                        </svg>

                                    </span>
                                </div>
                            </div>
                            <div className="flex items-center justify-between pb-4 bg-white border-b-2 pt-2 border-[#CBD5E1]">
                                <div className="flex items-center space-x-4">
                                    <span className="text-xl text-darkGreen font-bold">Google Pay/*********8453</span>
                                    <span className="text-[#94A3B8] text-base font-normal">20, Jan 2022</span>
                                </div>
                                <div className="flex items-center space-x-4">
                                    <span className="text-xl text-darkGreen font-bold">$500</span>
                                    <span className="text-[#94A3B8] text-base font-normal">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M12 1.25C9.37665 1.25 7.25 3.37665 7.25 6V6.25H4C3.58579 6.25 3.25 6.58579 3.25 7C3.25 7.41421 3.58579 7.75 4 7.75H20C20.4142 7.75 20.75 7.41421 20.75 7C20.75 6.58579 20.4142 6.25 20 6.25H16.75V6C16.75 3.37665 14.6234 1.25 12 1.25ZM12 2.75C13.7949 2.75 15.25 4.20507 15.25 6V6.25H8.75V6C8.75 4.20507 10.2051 2.75 12 2.75Z" fill="#F12828" />
                                            <path d="M5.74664 8.92906C5.70746 8.5167 5.34142 8.21418 4.92906 8.25336C4.5167 8.29254 4.21418 8.65858 4.25336 9.07094C4.34783 10.0652 4.51833 11.2903 4.73748 12.8651L5.01903 14.8881C5.28819 16.8229 5.44085 17.9201 5.77109 18.819C6.3857 20.4918 7.48205 21.8328 8.89206 22.4278C9.65773 22.7509 10.5335 22.7506 11.8373 22.75H12.1627C13.4665 22.7506 14.3423 22.7509 15.1079 22.4278C16.5179 21.8328 17.6143 20.4918 18.2289 18.819C18.5592 17.9201 18.7118 16.8229 18.981 14.8881L19.2625 12.8651C19.4817 11.2903 19.6522 10.0652 19.7466 9.07094C19.7858 8.65858 19.4833 8.29254 19.0709 8.25336C18.6586 8.21418 18.2925 8.5167 18.2534 8.92906C18.1623 9.88702 17.9965 11.08 17.7744 12.6761L17.512 14.5611C17.2215 16.6488 17.0884 17.5736 16.8209 18.3017C16.305 19.7058 15.4472 20.6566 14.5248 21.0458C14.0746 21.2358 13.5292 21.25 12 21.25C10.4708 21.25 9.92544 21.2358 9.47524 21.0458C8.55279 20.6566 7.69496 19.7058 7.17907 18.3017C6.91156 17.5736 6.77851 16.6488 6.48798 14.5611L6.22564 12.6761C6.00352 11.08 5.83766 9.88703 5.74664 8.92906Z" fill="#F12828" />
                                            <path d="M10.75 10C10.75 9.58579 10.4142 9.25 10 9.25C9.58579 9.25 9.25 9.58579 9.25 10V18C9.25 18.4142 9.58579 18.75 10 18.75C10.4142 18.75 10.75 18.4142 10.75 18V10Z" fill="#F12828" />
                                            <path d="M14.75 10C14.75 9.58579 14.4142 9.25 14 9.25C13.5858 9.25 13.25 9.58579 13.25 10V18C13.25 18.4142 13.5858 18.75 14 18.75C14.4142 18.75 14.75 18.4142 14.75 18V10Z" fill="#F12828" />
                                        </svg>

                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full">
                        <div className="w-full flex space-x-6 mb-7">
                            <div className='w-1/2'>
                                <label htmlFor="" className="inline-block text-sm font-bold text-yankeesBlue mb-1">Card Number</label>
                                <input type="text" name="" value="" className="input_box placeholder:text-[#94A3B8] placeholder:text-base" placeholder='******8453' readOnly />
                            </div>
                            <div className='w-1/2'>
                                <label htmlFor="" className="inline-block text-sm font-bold text-yankeesBlue mb-1">Paid Through</label>
                                <input type="text" name="" value="" className="input_box placeholder:text-[#94A3B8] placeholder:text-base" placeholder='Ex. Google pay' readOnly />
                            </div>
                        </div>
                        <div className="w-full flex space-x-6 mb-7">
                            <div className='w-1/2'>
                                <label htmlFor="" className="inline-block text-sm font-bold text-yankeesBlue mb-1">Paid Date</label>
                                <input type="text" name="" value="" className="input_box placeholder:text-[#94A3B8] placeholder:text-base" placeholder='20, Jan 2022' readOnly />
                            </div>
                            <div className='w-1/2'>
                                <label htmlFor="" className="inline-block text-sm font-bold text-yankeesBlue mb-1">Paid Amount</label>
                                <input type="text" name="" value="" className="input_box placeholder:text-[#94A3B8] placeholder:text-base" placeholder='$2,000' readOnly />
                            </div>
                        </div>
                    </div>
                    <button type="button" className="flex justify-end ml-auto text-xs font-bold text-white bg-[#29A073] rounded-md px-6 py-2 mb-6 mt-2">Save</button>
                    <div className="flex justify-center border-t-[1px] border-[#CBD5E1] space-x-5 pt-6">
                        <button type="button" onClick={() => handleClose(false)} className="max-w-[216px] w-full text-center cursor-pointer text-base font-extrabold text-yankeesBlue bg-white border-2 border-[#94A3B8] rounded-xl px-6 py-2">Cancel</button>
                        <button type="button" className="max-w-[216px] w-full text-center text-base font-extrabold cursor-pointer text-white bg-darkGreen border-2 border-darkGreen rounded-xl px-6 py-2">Paid</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default PaymentDetails