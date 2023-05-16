import React, { useCallback } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import bgImage from "../../assets/images/login-images.png"
import logo from "../../assets/images/logo.png"
import topCircle from "../../assets/images/top-circle.png"
import bottomCircle from "../../assets/images/bottom-circle.png"
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { forgotpassword } from './authSlice'
import { useDispatch } from 'react-redux'

function ForgotPassword() {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const emailRegExp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
	const ValidationSchema = Yup.object().shape({
		email: Yup.string()
			.matches(emailRegExp, "Email is not valid")
			.required("Email is required")
	});

	const initialState = {
		email: ""
	}

	const handelReset = async (values) => {
		try {
			const payload = {
				email: values.email
			}
			if (values && values.email !== '') {
				const response = await dispatch(forgotpassword(payload)).unwrap();
				if (response.data?.Status) {
					navigate(`../verificationcode/${payload.email}/false`)
				} else {
					<small className="text-red-500 text-xs">{response.data?.Message}</small>
				}
			} else {
				<small className="text-red-500 text-xs">Something went To Wrong!</small>
			}
		} catch (error) {
			console.log(error);
		}
	}
	const formik = useFormik({
		initialValues: initialState,
		validationSchema: ValidationSchema,
		onSubmit: handelReset
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
						<h1>Forgot Password</h1>
						<p className="text-lg text-[#64748B] font-normal sm:pt-3.5 xl:pr-8 whitespace-nowrap">Enter your email or phone number for reset password </p>
						<div className="w-full pt-7 sm:pt-9">
							<form onSubmit={formik.handleSubmit} className="space-y-5">
								<div>
									<label htmlFor="" className="input-titel">Email or Phone</label>
									<input type="email" className="input_box placeholder:text-[#94A3B8] placeholder:text-base" name="email" onChange={(e) => setInputValue("email", e.target.value)} value={formik.values?.email} placeholder='Enter your email' />
									<small className="text-red-500 text-xs">{formik.errors.email}</small>
								</div>
								<button type='submit' className="btn-primary w-full py-[15px] uppercase text-base leading-7 font-extrabold">Reset</button>
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

export default ForgotPassword