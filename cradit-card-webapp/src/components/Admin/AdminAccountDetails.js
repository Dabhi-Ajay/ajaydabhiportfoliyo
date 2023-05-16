import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Modal from '../../common/Modals/Modal';
import ChangePassword from './Popup/ChangePassword';
import { getProfileDetails, addProfileImage, useProfileDetails } from './Slice/ProfileSlice';
import previewImage from "../../assets/images/profile.png"
import ProfileIcon from '../../assets/svg/ImagesProfileIcon.svg'
import previewImage1 from '../../assets/svg/Previewimage.svg'
import { baseUrl } from '../../api/baseurl';
import axios from 'axios';
import authHeader from '../../redux/services/authHeader';

function AdminAccountDetails() {
	const profileDetails = useProfileDetails()
	const [changePassword, setChangePassword] = useState(false);
	const [profileImage, setProfileImage] = useState(null);
	const dispatch = useDispatch();

	const getProfile = async () => {
		try {
			await dispatch(getProfileDetails()).unwrap();
		} catch (error) {
			console.log(error);
		}
	}

	const addProfile = async (selected) => {
		let formData = new FormData();
		formData.append("profile_pic", selected);
		// formData.append("first_name", profileDetails?.first_name)
		// formData.append("last_name", profileDetails?.last_name)
		console.log("profile_pic", selected);
		console.log("FormData", formData);
		try {
			// const response = await axios.patch(`${baseUrl}admin-edit-profile`, formData, { headers: authHeader() })
			const response = await dispatch(addProfileImage(formData)).unwrap();
			if (response?.data?.Status) {
				setProfileImage(response.data.Data.profile_pic);
				alert("Profile image Updated Successful")
			} else {
				alert("Profile image Not Updated!")
			}
		} catch (error) {
			alert("Something Went To Wrong!")
		}
	}

	const photoChange = (event) => {
		const types = ["image/png", "image/jpeg", "image/jpg"];
		let selected = event;
		console.log("AAA", selected);
		try {
			if (selected && types.includes(selected.type)) {
				if (selected.size < 1 * 1024 * 2048) {
					setProfileImage(selected);
					addProfile(selected);
				} else {
					alert("File size is greater than 2mb");
				}
			} else {
				alert("Please select image file with jpeg/png.");
			}
		} catch (error) {
			console.log(error);
			alert("Error while selecting image")
		}
	}

	useEffect(() => {
		getProfile();
	}, [])


	return (
		<div className="wrapper min-h-full">
			<div className="flex items-center">
				<svg width="24" height="16" viewBox="0 0 24 16" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M7.65995 2.41586C8.0277 2.05138 8.03034 1.4578 7.66586 1.09005C7.30139 0.722305 6.7078 0.719657 6.34005 1.08414L4.09664 3.30762C3.25167 4.14505 2.56108 4.82949 2.07132 5.43932C1.56203 6.07348 1.19337 6.71716 1.09489 7.4898C1.0517 7.82858 1.0517 8.17142 1.09489 8.5102C1.19337 9.28284 1.56203 9.92652 2.07132 10.5607C2.56108 11.1705 3.25167 11.855 4.09665 12.6924L6.34005 14.9159C6.7078 15.2803 7.30138 15.2777 7.66586 14.9099C8.03034 14.5422 8.02769 13.9486 7.65995 13.5841L5.45624 11.4C4.56187 10.5136 3.94837 9.90353 3.53324 9.38662C3.39833 9.21863 3.29307 9.07075 3.21135 8.9375H22C22.5178 8.9375 22.9375 8.51777 22.9375 8C22.9375 7.48223 22.5178 7.0625 22 7.0625H3.21135C3.29308 6.92925 3.39833 6.78137 3.53324 6.61338C3.94837 6.09647 4.56187 5.48642 5.45624 4.6L7.65995 2.41586Z" fill="#0F172A" stroke="#0F172A" strokeLinecap="round" />
				</svg>
				<button type='button' className="text-3xl font-bold text-yankeesBlue leading-8 pl-7">{profileDetails?.first_name + " " + profileDetails?.last_name} Account Details</button>
			</div>
			<div className="pt-[50px]">
				<div className="flex items-center justify-center pb-[50px]">
					<div className="w-44 h-44 rounded-full border-8 border-spiroDiscoBall bg-[#E2E8F0] relative mr-9 max-[600px]:mr-0">
						<img
							src={profileDetails?.profile_pic || previewImage}
							// src={profileImage ? URL.createObjectURL(profileImage) : details?.profile_pic ? details?.s3Url + details?.profile_pic : previewImage}
							// src={profileImage ? profileImage : profileDetails?.profile_pic ? profileDetails?.profile_pic : previewImage1}
							alt="pictures"
							className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full object-cover rounded-full overflow-hidden"
						/>
						<div className="absolute bottom-0 right-0 flex justify-center items-center border-[2px] border-white w-11 h-11 cursor-pointer rounded-full bg-[#E2E8F0] z-10">
							{/* <i className="icon-camera"></i> */}
							<img src={ProfileIcon} alt="Image Preview Icon" className='w-7 h-7 object-cover cursor-pointer overflow-hidden p-1' />
							<input type="file" onChange={(e) => photoChange(e.currentTarget.files[0])} className="opacity-0 absolute inset-0 cursor-pointer" />
							{/* <input type="file" onChange={(e) => !isDisable && photoChangeHandler(e)} disabled={isDisable} className="opacity-0 absolute inset-0"/> */}
						</div>
					</div>
				</div>
				<form className="w-full flex items-center justify-between">
					<div className="w-full">
						<div className="w-full flex space-x-6 mb-7">
							<div className='w-1/2'>
								<label htmlFor="" className="input-title2">First name</label>
								<input type="text" name="" value={profileDetails?.first_name} className="input_box2 placeholder:text-[#94A3B8] placeholder:text-base" placeholder='Name' readOnly />
							</div>
							<div className='w-1/2'>
								<label htmlFor="" className="input-title2">Last name</label>
								<input type="text" name="" value={profileDetails?.last_name} className="input_box2 placeholder:text-[#94A3B8] placeholder:text-base" placeholder='Smith' readOnly />
							</div>
						</div>
						<div className="w-full flex space-x-6 mb-7">
							<div className='w-1/2'>
								<label htmlFor="" className="input-title2">Email</label>
								<input type="email" name="" value={profileDetails?.email} className="input_box2 placeholder:text-[#94A3B8] placeholder:text-base" placeholder='olivia123@gmail.com' readOnly />
							</div>
							<div className='w-1/2'>
								<label htmlFor="" className="input-title2">Phone number</label>
								<input type="tel" name="" value={profileDetails?.phone_no} className="input_box2 placeholder:text-[#94A3B8] placeholder:text-base" placeholder='+91 987654321' readOnly />
							</div>
						</div>
						<div className="w-full flex space-x-6 mb-7">
							<div className='w-1/2'>
								<label htmlFor="" className="input-title2">Password</label>
								<div className="relative">
									<input type="text" name="" value="************" className="relative input_box2 placeholder:text-[#94A3B8] placeholder:text-base" placeholder='Enter Your password' readOnly />
									<span onClick={() => setChangePassword(true)} className='absolute right-6 top-1/2 -translate-y-1/2 text-[#29A073] text-base font-extrabold cursor-pointer'>Change password</span>
								</div>
							</div>
						</div>
					</div>
				</form>
			</div>
			<Modal isOpen={changePassword}>
				<ChangePassword handleClose={setChangePassword} />
			</Modal>
		</div >

	)
}

export default AdminAccountDetails