import React from 'react'
import DemoImage from "../../assets/images/profile.png"

function SingleUserCommissionDetails() {
    return (
        <div className="wrapper min-h-full">
            <div className="flex items-center justify-between pb-11">
                <div className="flex items-center cursor-pointer">
                    <svg width="24" height="16" viewBox="0 0 24 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.65995 2.41586C8.0277 2.05138 8.03034 1.4578 7.66586 1.09005C7.30139 0.722305 6.7078 0.719657 6.34005 1.08414L4.09664 3.30762C3.25167 4.14505 2.56108 4.82949 2.07132 5.43932C1.56203 6.07348 1.19337 6.71716 1.09489 7.4898C1.0517 7.82858 1.0517 8.17142 1.09489 8.5102C1.19337 9.28284 1.56203 9.92652 2.07132 10.5607C2.56108 11.1705 3.25167 11.855 4.09665 12.6924L6.34005 14.9159C6.7078 15.2803 7.30138 15.2777 7.66586 14.9099C8.03034 14.5422 8.02769 13.9486 7.65995 13.5841L5.45624 11.4C4.56187 10.5136 3.94837 9.90353 3.53324 9.38662C3.39833 9.21863 3.29307 9.07075 3.21135 8.9375H22C22.5178 8.9375 22.9375 8.51777 22.9375 8C22.9375 7.48223 22.5178 7.0625 22 7.0625H3.21135C3.29308 6.92925 3.39833 6.78137 3.53324 6.61338C3.94837 6.09647 4.56187 5.48642 5.45624 4.6L7.65995 2.41586Z" fill="#0F172A" stroke="#0F172A" strokeLinecap="round" />
                    </svg>
                    <h3 className="text-yankeesBlue leading-8 pl-7">Olivia Smith Commission Details</h3>
                </div>
            </div>
            <div className="">
                <div className="bg-lightWhite rounded-xl py-6 px-12 mb-7">
                    <div className="text-yankeesBlue text-2xl font-bold mb-6">Payment From</div>
                    <div className="flex justify-center items-center space-x-5">
                        <div className="w-1/3">
                            <div className="flex items-center">
                                <div className="w-20 h-20 rounded-[24px] overflow-hidden">
                                    <img src={DemoImage} alt="" className='w-full h-full overflow-hidden' />
                                </div>
                                <div className="pl-4">
                                    <span className="text-base 2xl:text-xl font-bold text-lightGray block">Card holder name</span>
                                    <span className="text-2xl 2xl:text-4xl font-bold text-yankeesBlue block">Olivia Smith</span>
                                </div>
                            </div>
                        </div>
                        <div className="w-1/3">
                            <span className="text-lg xl:text-xl font-semibold text-lightGray mb-3">Card number</span>
                            <h2 className="text-yankeesBlue font-bold">**********0987</h2>
                        </div>
                        <div className="w-1/3 flex justify-end">
                            <div className="inline-block text-xl font-semibold text-[#ED4D37] bg-[#f3e7e7] rounded-lg px-5 2xl:px-6 py-4 2xl:py-5">Request</div>
                            {/* paid */}
                            {/* <div className="inline-block text-xl font-semibold text-[#097C69] bg-[#E2F8F5] rounded-lg px-5 2xl:px-6 py-4 2xl:py-5">Paid</div> */}
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-start space-x-7 mb-[50px]">
                    <div className="w-1/4">
                        <div className="bg-[#ed4d3714] py-7 px-11 rounded-xl">
                            <h2 className="text-[#ED4D37] mb-3">₹2000</h2>
                            <span className="text-[#64748B] text-xl font-semibold whitespace-nowrap">Total Due Amount</span>
                        </div>
                    </div>
                    {/* paid  */}
                    {/* <div className="w-1/4">
                        <div className="bg-[#f4f8e7] py-7 px-11 rounded-xl">
                            <h2 className="text-darkGreen mb-3">₹2000</h2>
                            <span className="text-[#64748B] text-xl font-semibold whitespace-nowrap">Total Due Amount</span>
                        </div>
                    </div> */}
                    <div className="w-1/4">
                        <div className="bg-white border border-[#CBD5E1] py-7 px-11 rounded-xl">
                            <h2 className="text-yankeesBlue mb-3">29 Dec 2023</h2>
                            <span className="text-[#64748B] text-xl font-semibold whitespace-nowrap">Due Date</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SingleUserCommissionDetails