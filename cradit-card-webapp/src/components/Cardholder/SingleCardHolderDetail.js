import React from 'react'
import { Link } from 'react-router-dom'
import Verification from "../../assets/svg/verfication.svg"
import Verified from "../../assets/svg/verified.svg"

function SingleCardHolderDetail() {
	return (
		<div className="wrapper min-h-full">
			<div className="flex items-center justify-between pb-9">
				<div className="flex items-center">
					<div className="flex items-center cursor-pointer pr-4">
						<svg width="24" height="16" viewBox="0 0 24 16" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M7.65995 2.41586C8.0277 2.05138 8.03034 1.4578 7.66586 1.09005C7.30139 0.722305 6.7078 0.719657 6.34005 1.08414L4.09664 3.30762C3.25167 4.14505 2.56108 4.82949 2.07132 5.43932C1.56203 6.07348 1.19337 6.71716 1.09489 7.4898C1.0517 7.82858 1.0517 8.17142 1.09489 8.5102C1.19337 9.28284 1.56203 9.92652 2.07132 10.5607C2.56108 11.1705 3.25167 11.855 4.09665 12.6924L6.34005 14.9159C6.7078 15.2803 7.30138 15.2777 7.66586 14.9099C8.03034 14.5422 8.02769 13.9486 7.65995 13.5841L5.45624 11.4C4.56187 10.5136 3.94837 9.90353 3.53324 9.38662C3.39833 9.21863 3.29307 9.07075 3.21135 8.9375H22C22.5178 8.9375 22.9375 8.51777 22.9375 8C22.9375 7.48223 22.5178 7.0625 22 7.0625H3.21135C3.29308 6.92925 3.39833 6.78137 3.53324 6.61338C3.94837 6.09647 4.56187 5.48642 5.45624 4.6L7.65995 2.41586Z" fill="#0F172A" stroke="#0F172A" strokeLinecap="round" />
						</svg>
						<h3 className="text-yankeesBlue leading-8 pl-4">Olivia Smith</h3>
					</div>
					<div className="flex items-center text-[#1E293B] bg-[#EAF2FF] px-3 py-2 rounded-lg">
						<img src={Verified} alt="Verified" />
						<span className="text-xs font-bold pl-2">Profile verified</span>
					</div>
				</div>
				<div className="flex space-x-3">
					<Link to='' className="btn-red flex items-center">
						<svg className='mr-3' width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path fillRule="evenodd" clipRule="evenodd" d="M7.00016 13.6663C10.6821 13.6663 13.6668 10.6816 13.6668 6.99967C13.6668 3.31778 10.6821 0.333008 7.00016 0.333008C3.31826 0.333008 0.333496 3.31778 0.333496 6.99967C0.333496 10.6816 3.31826 13.6663 7.00016 13.6663ZM8.76792 6.10077C8.96318 5.90551 8.96318 5.58893 8.76792 5.39367C8.57265 5.19841 8.25607 5.19841 8.06081 5.39367L7.00015 6.45433L5.93949 5.39367C5.74423 5.19841 5.42765 5.19841 5.23238 5.39367C5.03712 5.58893 5.03712 5.90551 5.23238 6.10077L6.29304 7.16143L5.23238 8.2221C5.03712 8.41736 5.03712 8.73394 5.23238 8.9292C5.42765 9.12446 5.74423 9.12446 5.93949 8.9292L7.00015 7.86854L8.06081 8.9292C8.25607 9.12446 8.57266 9.12446 8.76792 8.9292C8.96318 8.73394 8.96318 8.41736 8.76792 8.2221L7.70726 7.16143L8.76792 6.10077Z" fill="#FF616D" />
						</svg>
						<span className="">Reject</span>
					</Link>
					<Link to='' className="btn-red flex items-center">
						<img src={Verification} alt="verfication" className='pr-3' />
						<span className="">Click to Verify</span>
					</Link>
					<Link to='' className="btn-gray flex">
						View Cards
					</Link>
					<Link to='' className="btn-secondary flex">
						Edit Details
					</Link>
				</div>
			</div>
			<form className='pt-11 space-y-5'>
				<div className="w-full flex items-center space-x-6">
					<div className='w-1/2'>
						<label htmlFor="" className="input-title2">First name</label>
						<input type="text" name="" className="input_box2 text-yankeesBlue placeholder:text-[#94A3B8] placeholder:text-xl" placeholder='Olivia' required />
					</div>
					<div className='w-1/2'>
						<label htmlFor="" className="input-title2">Last name</label>
						<input type="text" name="" className="input_box2 text-yankeesBlue placeholder:text-[#94A3B8] placeholder:text-xl" placeholder='Smith' required />
					</div>
				</div>
				<div className="w-full flex items-center space-x-6">
					<div className='w-1/2'>
						<label htmlFor="" className="input-title2">Email</label>
						<input type="email" name="" className="input_box2 text-yankeesBlue placeholder:text-[#94A3B8] placeholder:text-xl" placeholder='olivia123@gmail.com' required />
					</div>
					<div className='w-1/2'>
						<label htmlFor="" className="input-title2">Phone number</label>
						<input type="text" name="" className="input_box2 text-yankeesBlue placeholder:text-[#94A3B8] placeholder:text-xl" placeholder='+91 987654321' required />
					</div>
				</div>
				<div className='w-full flex items-center space-x-6'>
					<div className='w-1/2'>
						<label htmlFor="" className="input-title2">Aadhar card</label>
						<label className='input_box2 flex items-center border-dashed justify-center' htmlFor='AdharCard-photo'>
							<svg width="22" height="18" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M19.7793 10.8746L20.3886 11.312L19.7793 10.8746ZM19.7793 7.1254L19.1701 7.56278L19.7793 7.1254ZM20.6631 9H19.9131H20.6631ZM2.22067 10.8746L2.82993 10.4372L2.22067 10.8746ZM2.22067 7.1254L1.61142 6.68801L2.22067 7.1254ZM1.33691 9H0.586914H1.33691ZM1.61142 11.312C2.47962 12.5214 3.77164 14.1105 5.35173 15.4043C6.92325 16.691 8.85905 17.75 11 17.75V16.25C9.35423 16.25 7.7491 15.4285 6.302 14.2437C4.86349 13.0659 3.6592 11.5923 2.82993 10.4372L1.61142 11.312ZM11 17.75C13.141 17.75 15.0768 16.691 16.6483 15.4043C18.2284 14.1105 19.5204 12.5214 20.3886 11.312L19.1701 10.4372C18.3408 11.5923 17.1365 13.0659 15.698 14.2437C14.2509 15.4285 12.6458 16.25 11 16.25V17.75ZM20.3886 6.68801C19.5204 5.47865 18.2284 3.88946 16.6483 2.59571C15.0768 1.30899 13.141 0.25 11 0.25V1.75C12.6458 1.75 14.2509 2.57146 15.698 3.75631C17.1365 4.93414 18.3408 6.40765 19.1701 7.56278L20.3886 6.68801ZM11 0.25C8.85905 0.25 6.92325 1.30899 5.35173 2.59572C3.77164 3.88946 2.47962 5.47865 1.61142 6.68801L2.82993 7.56278C3.6592 6.40765 4.86348 4.93414 6.302 3.75631C7.7491 2.57146 9.35423 1.75 11 1.75V0.25ZM20.3886 11.312C20.943 10.5398 21.4131 9.92861 21.4131 9H19.9131C19.9131 9.35852 19.794 9.56806 19.1701 10.4372L20.3886 11.312ZM19.1701 7.56278C19.794 8.43194 19.9131 8.64148 19.9131 9H21.4131C21.4131 8.07139 20.943 7.46024 20.3886 6.68801L19.1701 7.56278ZM2.82993 10.4372C2.20597 9.56806 2.08691 9.35852 2.08691 9H0.586914C0.586914 9.92861 1.05703 10.5398 1.61142 11.312L2.82993 10.4372ZM1.61142 6.68801C1.05703 7.46024 0.586914 8.07139 0.586914 9H2.08691C2.08691 8.64148 2.20597 8.43194 2.82993 7.56278L1.61142 6.68801ZM7.25001 9C7.25001 11.0711 8.92894 12.75 11 12.75V11.25C9.75737 11.25 8.75001 10.2426 8.75001 9H7.25001ZM11 12.75C13.0711 12.75 14.75 11.0711 14.75 9H13.25C13.25 10.2426 12.2426 11.25 11 11.25V12.75ZM14.75 9C14.75 6.92893 13.0711 5.25 11 5.25V6.75C12.2426 6.75 13.25 7.75736 13.25 9H14.75ZM11 5.25C8.92894 5.25 7.25001 6.92893 7.25001 9H8.75001C8.75001 7.75736 9.75737 6.75 11 6.75V5.25Z" fill="#1E293B" />
							</svg>
							<span className="text-yankeesBlue font-normal text-xl pl-4">View Aadhar</span>
						</label>
						<input type="file" name="" id='AdharCard-photo' className="input_box2 text-yankeesBlue placeholder:text-[#94A3B8] placeholder:text-base hidden" placeholder='Card photo upload' required />
					</div>
					<div className='w-1/2'>
						<label htmlFor="" className="input-title2">Pan card</label>
						<label className='input_box2 flex items-center border-dashed justify-center' htmlFor='panCard-photo'>
							<svg width="22" height="18" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M19.7793 10.8746L20.3886 11.312L19.7793 10.8746ZM19.7793 7.1254L19.1701 7.56278L19.7793 7.1254ZM20.6631 9H19.9131H20.6631ZM2.22067 10.8746L2.82993 10.4372L2.22067 10.8746ZM2.22067 7.1254L1.61142 6.68801L2.22067 7.1254ZM1.33691 9H0.586914H1.33691ZM1.61142 11.312C2.47962 12.5214 3.77164 14.1105 5.35173 15.4043C6.92325 16.691 8.85905 17.75 11 17.75V16.25C9.35423 16.25 7.7491 15.4285 6.302 14.2437C4.86349 13.0659 3.6592 11.5923 2.82993 10.4372L1.61142 11.312ZM11 17.75C13.141 17.75 15.0768 16.691 16.6483 15.4043C18.2284 14.1105 19.5204 12.5214 20.3886 11.312L19.1701 10.4372C18.3408 11.5923 17.1365 13.0659 15.698 14.2437C14.2509 15.4285 12.6458 16.25 11 16.25V17.75ZM20.3886 6.68801C19.5204 5.47865 18.2284 3.88946 16.6483 2.59571C15.0768 1.30899 13.141 0.25 11 0.25V1.75C12.6458 1.75 14.2509 2.57146 15.698 3.75631C17.1365 4.93414 18.3408 6.40765 19.1701 7.56278L20.3886 6.68801ZM11 0.25C8.85905 0.25 6.92325 1.30899 5.35173 2.59572C3.77164 3.88946 2.47962 5.47865 1.61142 6.68801L2.82993 7.56278C3.6592 6.40765 4.86348 4.93414 6.302 3.75631C7.7491 2.57146 9.35423 1.75 11 1.75V0.25ZM20.3886 11.312C20.943 10.5398 21.4131 9.92861 21.4131 9H19.9131C19.9131 9.35852 19.794 9.56806 19.1701 10.4372L20.3886 11.312ZM19.1701 7.56278C19.794 8.43194 19.9131 8.64148 19.9131 9H21.4131C21.4131 8.07139 20.943 7.46024 20.3886 6.68801L19.1701 7.56278ZM2.82993 10.4372C2.20597 9.56806 2.08691 9.35852 2.08691 9H0.586914C0.586914 9.92861 1.05703 10.5398 1.61142 11.312L2.82993 10.4372ZM1.61142 6.68801C1.05703 7.46024 0.586914 8.07139 0.586914 9H2.08691C2.08691 8.64148 2.20597 8.43194 2.82993 7.56278L1.61142 6.68801ZM7.25001 9C7.25001 11.0711 8.92894 12.75 11 12.75V11.25C9.75737 11.25 8.75001 10.2426 8.75001 9H7.25001ZM11 12.75C13.0711 12.75 14.75 11.0711 14.75 9H13.25C13.25 10.2426 12.2426 11.25 11 11.25V12.75ZM14.75 9C14.75 6.92893 13.0711 5.25 11 5.25V6.75C12.2426 6.75 13.25 7.75736 13.25 9H14.75ZM11 5.25C8.92894 5.25 7.25001 6.92893 7.25001 9H8.75001C8.75001 7.75736 9.75737 6.75 11 6.75V5.25Z" fill="#1E293B" />
							</svg>
							<span className="text-yankeesBlue font-normal text-xl pl-4">View Pan card</span>
						</label>
						<input type="file" name="" id='panCard-photo' className="input_box2 text-yankeesBlue placeholder:text-[#94A3B8] placeholder:text-base hidden" placeholder='Card photo upload' required />
					</div>
				</div>
				<div className='w-full flex items-center space-x-6'>
					<div className='w-full'>
						<label htmlFor="" className="input-title2">Upload cheque photo </label>
						<label className='input_box2 flex items-center border-dashed justify-center' htmlFor='cheque-photo'>
							<svg width="22" height="18" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M19.7793 10.8746L20.3886 11.312L19.7793 10.8746ZM19.7793 7.1254L19.1701 7.56278L19.7793 7.1254ZM20.6631 9H19.9131H20.6631ZM2.22067 10.8746L2.82993 10.4372L2.22067 10.8746ZM2.22067 7.1254L1.61142 6.68801L2.22067 7.1254ZM1.33691 9H0.586914H1.33691ZM1.61142 11.312C2.47962 12.5214 3.77164 14.1105 5.35173 15.4043C6.92325 16.691 8.85905 17.75 11 17.75V16.25C9.35423 16.25 7.7491 15.4285 6.302 14.2437C4.86349 13.0659 3.6592 11.5923 2.82993 10.4372L1.61142 11.312ZM11 17.75C13.141 17.75 15.0768 16.691 16.6483 15.4043C18.2284 14.1105 19.5204 12.5214 20.3886 11.312L19.1701 10.4372C18.3408 11.5923 17.1365 13.0659 15.698 14.2437C14.2509 15.4285 12.6458 16.25 11 16.25V17.75ZM20.3886 6.68801C19.5204 5.47865 18.2284 3.88946 16.6483 2.59571C15.0768 1.30899 13.141 0.25 11 0.25V1.75C12.6458 1.75 14.2509 2.57146 15.698 3.75631C17.1365 4.93414 18.3408 6.40765 19.1701 7.56278L20.3886 6.68801ZM11 0.25C8.85905 0.25 6.92325 1.30899 5.35173 2.59572C3.77164 3.88946 2.47962 5.47865 1.61142 6.68801L2.82993 7.56278C3.6592 6.40765 4.86348 4.93414 6.302 3.75631C7.7491 2.57146 9.35423 1.75 11 1.75V0.25ZM20.3886 11.312C20.943 10.5398 21.4131 9.92861 21.4131 9H19.9131C19.9131 9.35852 19.794 9.56806 19.1701 10.4372L20.3886 11.312ZM19.1701 7.56278C19.794 8.43194 19.9131 8.64148 19.9131 9H21.4131C21.4131 8.07139 20.943 7.46024 20.3886 6.68801L19.1701 7.56278ZM2.82993 10.4372C2.20597 9.56806 2.08691 9.35852 2.08691 9H0.586914C0.586914 9.92861 1.05703 10.5398 1.61142 11.312L2.82993 10.4372ZM1.61142 6.68801C1.05703 7.46024 0.586914 8.07139 0.586914 9H2.08691C2.08691 8.64148 2.20597 8.43194 2.82993 7.56278L1.61142 6.68801ZM7.25001 9C7.25001 11.0711 8.92894 12.75 11 12.75V11.25C9.75737 11.25 8.75001 10.2426 8.75001 9H7.25001ZM11 12.75C13.0711 12.75 14.75 11.0711 14.75 9H13.25C13.25 10.2426 12.2426 11.25 11 11.25V12.75ZM14.75 9C14.75 6.92893 13.0711 5.25 11 5.25V6.75C12.2426 6.75 13.25 7.75736 13.25 9H14.75ZM11 5.25C8.92894 5.25 7.25001 6.92893 7.25001 9H8.75001C8.75001 7.75736 9.75737 6.75 11 6.75V5.25Z" fill="#1E293B" />
							</svg>
							<span className="text-yankeesBlue font-normal text-xl pl-4">View cheque photo </span>
						</label>
						<input type="file" name="" id='cheque-photo' className="input_box2 text-yankeesBlue placeholder:text-[#94A3B8] placeholder:text-base hidden" placeholder='Card photo upload' required />
					</div>
				</div>
			</form>
		</div>
	)
}

export default SingleCardHolderDetail