import React, { useCallback, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import bgImage from "../../assets/images/login-images.png"
import logo from "../../assets/images/logo.png"
import topCircle from "../../assets/images/top-circle.png"
import bottomCircle from "../../assets/images/bottom-circle.png"
import { resetpassword } from "../auth/authSlice"
import { useFormik } from 'formik'
import * as Yup from 'yup';
import { useDispatch } from 'react-redux'

function ResetPassword() {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const params = useParams();
	const useremail = params.useremail;
	const [passError, setPassError] = useState("");

	const ValidationSchema = Yup.object().shape({
		email: Yup.string().required("Email is required"),
		password: Yup.string().required("Password is required"),
		password2: Yup.string().required("ConformPassword is required")
	});

	const initialState = {
		email: useremail,
		password: "",
		password2: ""
	}

	const handelSubmitNewPassword = async (values) => {
		const payload = {
			email: useremail,
			password: values.password,
			password2: values.password2
		}
		if (values && values.password && values.password2 !== '') {
			if (values.password === values.password2) {
				const response = await dispatch(resetpassword(payload)).unwrap();
				if (response.data?.Status) {
					navigate("../");
				}
			} else {
				setPassError("Password And ConformPassword Not Match!")
			}
		} else {
			setPassError("Enter A Password and ConformPassword!")
		}
	}

	const formik = useFormik({
		initialValues: initialState,
		validationSchema: ValidationSchema,
		onSubmit: handelSubmitNewPassword,
	});

	const setInputValue = useCallback(
		(key, value) =>
			formik.setValues({
				...formik.values,
				[key]: value,
			}),
		[formik]
	);

	return (
		<div className="flex h-screen">
			<div className="flex w-full flex-wrap bg-white">
				<div className="w-full relative lg:w-1/2 flex p-[60px]">
					<div className="">
						<div className="absolute top-0 sm:right-20 md:right-32 sm:block hidden">
							<img src={topCircle} alt="Top Circle Shape" />
						</div>
						<div className="absolute bottom-0 sm:left-20 md:left-32 sm:block hidden">
							<img src={bottomCircle} alt="Bottom Circle Shape" />
						</div>
					</div>
					<Link to='' className='absolute'><img src={logo} alt="Alt Text" /></Link>
					<div className="max-w-md w-full m-auto">
						<h1>Reset Password</h1>
						<p className="text-lg text-[#64748B] font-normal sm:pt-3.5 xl:pr-8 whitespace-nowrap">Enter your New Password</p>
						<small className="text-red-500 text-xs">{passError}</small>
						<div className="w-full pt-7 sm:pt-9">
							<form onSubmit={formik.handleSubmit} className="space-y-5">
								<div>
									<label htmlFor="" className="input-titel">Enter New Password</label>
									<input type="Password" name="password" placeholder='Enter new password' value={formik.values?.password} onChange={(e) => setInputValue("password", e.target.value)} className="input_box placeholder:text-[#94A3B8] placeholder:text-base" />
									<small className="text-red-500 text-xs">{formik.errors?.password}</small>
								</div>
								<div>
									<label htmlFor="" className="input-titel">Confirm New Password</label>
									<input type="Password" name="password2" placeholder='Enter confirm password' value={formik.values?.password2} onChange={(e) => setInputValue("password2", e.target.value)} className="input_box placeholder:text-[#94A3B8] placeholder:text-base" />
									<small className="text-red-500 text-xs">{formik.errors?.password2}</small>
								</div>
								<button type='submit' className="btn-primary w-full py-[15px] uppercase text-base leading-7 font-extrabold">Submit a new password</button>
							</form>
						</div>
					</div>
				</div>
				<div className="w-full h-full lg:w-1/2 hidden lg:block">
					<img src={bgImage} alt="login-bg" className="w-full h-full object-cover object-bottom" />
				</div>
			</div>
		</div>
	)
}

export default ResetPassword