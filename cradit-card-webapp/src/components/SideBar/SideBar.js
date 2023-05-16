import React, { useState } from 'react'
import { NavLink, Route, Routes, useNavigate } from 'react-router-dom'
import Logo from '../../assets/images/logo.png'
import DashboardIcon from '../../assets/svg/dashboard-lcon.svg'
import CardHolderIcon from '../../assets/svg/cardHolder-icon.svg'
import PaymentIcon from '../../assets/svg/payment.svg'
import TransactIons from '../../assets/svg/transactions.svg'
import CommissionIcon from '../../assets/svg/commission.svg'
import HelpIcon from '../../assets/svg/help.svg'
import LogoutIcon from '../../assets/svg/logout.svg'
import SearchIcon from '../../assets/svg/search.svg'
import Notification from '../../assets/svg/notification.svg'
import CardAdd from '../../assets/svg/newaddCard.svg'
import Profile from '../../assets/images/profile.png'
import BackArrow from '../../assets/svg/backArrow.svg'
// import Login from '../auth/Login'
import CardHolderList from '../Cardholder/CardHolderList'
import AdminAccountDetails from '../Admin/AdminAccountDetails'
import AdminCards from '../Admin/AdminCards'
import AdminAddCard from '../Admin/AdminAddCard'
import CreateAccount from '../Cardholder/CreateAccount'
import SingleCardHolderDetail from '../Cardholder/SingleCardHolderDetail'
import SingleCardHolderCardsList from '../Cardholder/SingleCardHolderCardsList'
import TransactionHistory from '../Transaction/TransactionHistory'
import Payments from '../Payments/Payments'
import SinglePaymentRequestDetails from '../Payments/SinglePaymentRequestDetails'
import SinglePaymentPaidDetails from '../Payments/SinglePaymentPaidDetails'
import Commission from '../Commission/Commission'
import CommissionPaidHistory from '../Commission/CommissionPaidHistory'
import CommissionUnpaidHistory from '../Commission/CommissionUnpaidHistory'
import { useDispatch, useSelector } from 'react-redux'
import { removeToken } from "../auth/authSlice";
import CardHolderAddCard from '../Cardholder/CardHolderAddCard'
// import { ProfileUrl } from '../../api/baseurl'
import previewImage1 from '../../assets/svg/Previewimage.svg'
import SingleUserCommissionDetails from '../Commission/SingleUserCommissionDetails'
import AdminCreditAddCard from '../Admin/AdminCreditAddCard'
import AdminWallet from '../Admin/AdminWallet'
import Dashboard from '../Dashboard/Dashboard'
import SingleCardDetails from '../Cardholder/SingleCardDetails'

function SideBar() {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const [tab, setTab] = useState("Dashboard");

	const profileDetails = useSelector(state => state.profile.profileDetails)

	const handleLogOut = () => {
		dispatch(removeToken());
		localStorage.clear();
		navigate("../");
	}

	return (
		<div className="main flex min-h-screen bg-white">
			{/* <!-- Left Panel --> */}
			<div className="leftPanel max-w-[230px] w-full bg-lightWhite border-[#CBD5E1] border-r-2 relative z-30">
				<div className="flex flex-col min-h-full">
					<div className="mx-auto p-[64px]">
						<img src={Logo} alt="logo images" />
					</div>
					<nav className="SideNav px-[24px]">
						<NavLink to="../dashboard" activeclassname="active" onClick={() => setTab("Dashboard")} className="SideLink flex items-center rounded-lg px-[18px] py-4 text-lightGray ">
							<img src={DashboardIcon} alt="DashboardIcon" />
							<span className="text-sm font-bold leading-5  pl-[13px]">Dashboard</span>
						</NavLink>
						<NavLink to="../cardholder" activeclassname="active" onClick={() => setTab("Cardholder")} className="SideLink flex items-center rounded-lg px-[18px] py-4 text-lightGray">
							<img src={CardHolderIcon} alt="DashboardIcon" />
							<span className="text-sm font-bold leading-5 pl-[13px]">Cards Holder</span>
						</NavLink>
						<NavLink to="../payment" activeclassname="active" onClick={() => setTab("Payment")} className="SideLink flex items-center rounded-lg px-[18px] py-4 text-lightGray">
							<img src={PaymentIcon} alt="DashboardIcon" />
							<span className="text-sm font-bold leading-5 pl-[13px]">Payments</span>
						</NavLink>
						<NavLink to="../transaction" activeclassname="active" onClick={() => setTab("Transaction")} className="SideLink flex items-center rounded-lg px-[18px] py-4 text-lightGray">
							<img src={TransactIons} alt="DashboardIcon" />
							<span className="text-sm font-bold leading-5 pl-[13px]">Transactions</span>
						</NavLink>
						<NavLink to="../commission" activeclassname="active" onClick={() => setTab("Commission")} className="SideLink flex items-center rounded-lg px-[18px] py-4 text-lightGray">
							<img src={CommissionIcon} alt="DashboardIcon" />
							<span className="text-sm font-bold leading-5 pl-[13px]">Commission</span>
						</NavLink>
					</nav>
					<div className="mt-auto px-[24px] mb-[80px]">
						<NavLink to="/" className="SideLink flex items-center rounded-lg px-[18px] py-3.5 text-lightGray">
							<img src={HelpIcon} alt="DashboardIcon" />
							<span className="text-sm font-bold leading-5 pl-[13px]">Help</span>
						</NavLink>
						<button onClick={() => handleLogOut()} className="SideLink w-full flex items-center rounded-lg px-[18px] py-3.5 text-lightGray">
							<img src={LogoutIcon} alt="DashboardIcon" />
							<span className="text-sm font-bold leading-5 pl-[13px]">Logout</span>
						</button>
					</div>
				</div>
			</div>
			{/* Right Panel  */}
			<div className="w-full">
				{/* <!-- Top Header --> */}
				<div className="w-full bg-lightWhite py-6 px-6 xl:px-20 xl:py-7 flex flex-wrap items-center border-[#CBD5E1] border-b-2">
					<div className="w-full flex justify-between items-center ">
						<h2 className='block font-bold leading-[48px] text-[#0F172A]'>{tab}</h2>
						<div className="flex items-center space-x-10">
							<button type="button" className=""><img src={SearchIcon} alt="Search Icon" /></button>
							<div className="relative group">
								<button type="button" className=""><img src={Notification} alt="Notification Icon" /></button>
								{/* Notification Box  */}
								<div className="absolute right-0 top-10 w-full min-w-[482px] bg-white rounded-2xl p-6 shadow-shadowbox invisible group-hover:visible opacity-0 group-hover:opacity-100 translate-y-16 group-hover:translate-y-0 z-40 anim">
									<h6 className="text-[#1F2937] text-lg font-bold leading-8 border-b-2 border-[#CBD5E1] pb-2">Notifications</h6>
									<div className="space-y-6 pt-6">
										<div className="flex justify-between items-center">
											<div className="flex">
												<div className="w-8 h-8 rounded-full overflow-hidden">
													<img src={Profile} alt="Notification Images" className='w-full h-full object-cover' />
												</div>
												<div className="text-sm text-yankeesBlue pl-4">
													<div className="">
														<span className="font-bold">Ray Arnold</span>
														<span className="font-normal font-second pl-1">profile verify request</span>
													</div>
													<span className="font-second text-[#9CA3AF] text-xs font-normal">Yesterday at 11:42 PM</span>
												</div>
											</div>
											<div className="space-x-4">
												<button type="button" className="text-xs font-semibold text-[#64748B] border-[#64748B] border-2 rounded-lg py-2 px-3">View</button>
												<button type="button" className="text-xs font-semibold bg-darkGreen text-white border-darkGreen border-2 rounded-lg py-2 px-3">Approve</button>
											</div>
										</div>
										<div className="flex justify-between items-center">
											<div className="flex">
												<div className="w-8 h-8 rounded-full overflow-hidden">
													<img src={Profile} alt="Notification Images" className='w-full h-full object-cover' />
												</div>
												<div className="text-sm text-yankeesBlue pl-4">
													<div className="">
														<span className="font-bold">Ray Arnold</span>
														<span className="font-normal font-second pl-1">profile verify request profile verify request</span>
													</div>
													<span className="font-second text-[#9CA3AF] text-xs font-normal">Yesterday at 11:42 PM</span>
												</div>
											</div>
										</div>
										<div className="flex justify-between items-center">
											<div className="flex">
												<div className="w-8 h-8 rounded-full overflow-hidden">
													<img src={Profile} alt="Notification Images" className='w-full h-full object-cover' />
												</div>
												<div className="text-sm text-yankeesBlue pl-4">
													<div className="">
														<span className="font-bold">Ray Arnold</span>
														<span className="font-normal font-second pl-1">profile verify request profile verify request</span>
													</div>
													<span className="font-second text-[#9CA3AF] text-xs font-normal">Yesterday at 11:42 PM</span>
												</div>
											</div>
										</div>
										<div className="flex justify-between items-center">
											<div className="flex">
												<div className="w-8 h-8 rounded-full overflow-hidden">
													<img src={Profile} alt="Notification Images" className='w-full h-full object-cover' />
												</div>
												<div className="text-sm text-yankeesBlue pl-4">
													<div className="">
														<span className="font-bold">Ray Arnold</span>
														<span className="font-normal font-second pl-1">profile verify request</span>
													</div>
													<span className="font-second text-[#9CA3AF] text-xs font-normal">Yesterday at 11:42 PM</span>
												</div>
											</div>
											<div className="space-x-4">
												<button type="button" className="text-xs font-semibold text-[#64748B] border-[#64748B] border-2 rounded-lg py-2 px-3">View</button>
												<button type="button" className="text-xs font-semibold bg-darkGreen text-white border-darkGreen border-2 rounded-lg py-2 px-3">Approve</button>
											</div>
										</div>
										<div className="flex justify-between items-center">
											<div className="flex">
												<div className="w-8 h-8 rounded-full overflow-hidden">
													<img src={Profile} alt="Notification Images" className='w-full h-full object-cover' />
												</div>
												<div className="text-sm text-yankeesBlue pl-4">
													<div className="">
														<span className="font-bold">Ray Arnold</span>
														<span className="font-normal font-second pl-1">profile verify request profile verify request</span>
													</div>
													<span className="font-second text-[#9CA3AF] text-xs font-normal">Yesterday at 11:42 PM</span>
												</div>
											</div>
										</div>
										<div className="flex justify-between items-center">
											<div className="flex">
												<div className="w-8 h-8 rounded-full overflow-hidden">
													<img src={Profile} alt="Notification Images" className='w-full h-full object-cover' />
												</div>
												<div className="text-sm text-yankeesBlue pl-4">
													<div className="">
														<span className="font-bold">Ray Arnold</span>
														<span className="font-normal font-second pl-1">profile verify request profile verify request</span>
													</div>
													<span className="font-second text-[#9CA3AF] text-xs font-normal">Yesterday at 11:42 PM</span>
												</div>
											</div>
										</div>
										<div className="flex justify-between items-center">
											<div className="flex">
												<div className="w-8 h-8 rounded-full overflow-hidden">
													<img src={Profile} alt="Notification Images" className='w-full h-full object-cover' />
												</div>
												<div className="text-sm text-yankeesBlue pl-4">
													<div className="">
														<span className="font-bold">Ray Arnold</span>
														<span className="font-normal font-second pl-1">profile verify request</span>
													</div>
													<span className="font-second text-[#9CA3AF] text-xs font-normal">Yesterday at 11:42 PM</span>
												</div>
											</div>
											<div className="space-x-4">
												<button type="button" className="text-xs font-semibold text-[#64748B] border-[#64748B] border-2 rounded-lg py-2 px-3">View</button>
												<button type="button" className="text-xs font-semibold bg-darkGreen text-white border-darkGreen border-2 rounded-lg py-2 px-3">Approve</button>
											</div>
										</div>
										<div className="flex justify-between items-center">
											<div className="flex">
												<div className="w-8 h-8 rounded-full overflow-hidden">
													<img src={Profile} alt="Notification Images" className='w-full h-full object-cover' />
												</div>
												<div className="text-sm text-yankeesBlue pl-4">
													<div className="">
														<span className="font-bold">Ray Arnold</span>
														<span className="font-normal font-second pl-1">profile verify request profile verify request</span>
													</div>
													<span className="font-second text-[#9CA3AF] text-xs font-normal">Yesterday at 11:42 PM</span>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<button type="button" className=""><img src={CardAdd} alt="New ADD Card Icon" /></button>
							<button type="button" className="relative flex items-center bg-azureishWhite rounded-full py-[6px] px-4 group">
								<div className="relative">
									<div className="flex items-center">
										<div className="flex items-center">
											<div className="w-9 h-9 overflow-hidden rounded-full bg-white">
												<img
													// src={previewImage1}
													src={profileDetails && profileDetails?.profile !== '' ? profileDetails?.profile_pic : previewImage1}
													alt="Profile Avatar" className='w-full h-full object-cover object-top' />
											</div>
											<span className="block text-left max-w-[120px] min-w-[120px] w-full text-sm font-bold leading-5 text-[#1E293B] ml-3 truncate">{profileDetails?.first_name + " " + profileDetails?.last_name}</span>
										</div>
										<img src={BackArrow} alt="Back Arrow Icon" className='pl-2' />
									</div>
								</div>
								{/* Profile Details Box   */}
								<div className="absolute w-full top-[54px] right-0 bg-white rounded-2xl shadow-shadowbox max-w-[218px] min-w-[218px] invisible group-hover:visible opacity-0 group-hover:opacity-100 translate-y-10 group-hover:translate-y-0 z-40 anim">
									<div className="">
										<span onClick={() => navigate('adminaccountdetails')} className='w-full block text-left text-[#334155] hover:text-darkGreen text-sm font-medium anim px-6 py-2 pt-4'>Account Details</span>
										<span onClick={() => navigate('admincards')} className='w-full block text-left text-[#334155] hover:text-darkGreen text-sm font-medium anim px-6 py-2'>Cards</span>
										<span onClick={() => navigate('adminwallet')} className='w-full block text-left text-[#334155] hover:text-darkGreen text-sm font-medium anim px-6 py-2'>My wallet</span>
										<span className='w-full block text-left text-[#334155] hover:text-darkGreen text-sm font-medium anim px-6 py-2'>Bank Accounts</span>
										<span onClick={() => navigate('transaction')} className='w-full block text-left text-[#334155] hover:text-darkGreen text-sm font-medium anim px-6 py-2 pb-4'>Transactions</span>
									</div>
								</div>
							</button>
						</div>
					</div>
				</div>
				{/* <!-- Content In --> */}
				<div className="rightInContent">
					<Routes>
						<Route index path='admincards' element={<AdminCards />} />
						<Route path='adminaccountdetails' element={<AdminAccountDetails />} />
						<Route path='adminwallet' element={<AdminWallet />} />
						<Route path='adminaddcard' element={<AdminAddCard />} />
						<Route path='dashboard'>
							<Route index element={<Dashboard />} />
							<Route path='addadmincreditcard' element={<AdminCreditAddCard />} />
						</Route>
						<Route path='cardholder'>
							<Route index element={<CardHolderList />} />
							<Route path='createaccount' element={<CreateAccount />} />
							<Route path='singlecardholderdetail' element={<SingleCardHolderDetail />} />
							<Route path='singlecardholdercardlist' element={<SingleCardHolderCardsList />} />
							<Route path='singlecarddetails' element={<SingleCardDetails />} />
							<Route path='addcardholdercard' element={<CardHolderAddCard />} />
						</Route>
						<Route path='transaction'>
							<Route index element={<TransactionHistory />} />
						</Route>
						<Route path='payment'>
							<Route index element={<Payments />} />
							<Route path='singlepaymentrequestdetails' element={<SinglePaymentRequestDetails />} />
							<Route path='singlepaymentpaiddetails' element={<SinglePaymentPaidDetails />} />
						</Route>
						<Route path='commission'>
							<Route index element={<Commission />} />
							<Route path='commissionpaidhistory' element={<CommissionPaidHistory />} />
							<Route path='commissionunpaidhistory' element={<CommissionUnpaidHistory />} />
							<Route path='singleusercommissiondetails' element={<SingleUserCommissionDetails />} />
						</Route>
					</Routes>
				</div>
			</div>
		</div>

	)
}

export default SideBar