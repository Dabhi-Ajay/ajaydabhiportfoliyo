import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import bgImage from "../../assets/images/login-images.png"
import logo from "../../assets/images/logo.png"
import topCircle from "../../assets/images/top-circle.png"
import bottomCircle from "../../assets/images/bottom-circle.png"
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik"
import { registration } from "./authSlice";
import { useDispatch } from "react-redux";


const Register = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const initialState = {
		first_name: "",
		last_name: "",
		password: "",
		password2: "",
		email: "",
		phone_no: ""
	}

		const ValidationSchema = Yup.object().shape({
			first_name: Yup.string()
				.min(2, "Too Short!")
				.max(40, "Too Long!")
				.required("Full name is required*"),
			last_name: Yup.string()
				.min(2, "Too Short!")
				.max(40, "Too Long!")
				.required("Last name is required*"),
			password: Yup.string()
				.min(6, "Too Short!")
				.required("Password is required*"),
			password2: Yup.string()
				.min(6, "Too Short!")
				.required("ConfirmPassword is required*"),
			email: Yup.string()
				.email("Invalid email format")
				.required("Email address is required*"),
			phone_no: Yup.number()
				.typeError("Phone no must be in digit")
				.integer()
				.positive("Phone no must be positive")
				.required("Phone no is required"),
		});


	const handelRegister = async (values) => {
		if (values.password === values.password2) {
			try {
				let payload = { ...values };
				const response = await dispatch(registration(payload)).unwrap();
				if (response.data.Status === true) {
					localStorage.setItem("email", response.data.Data.email);
					navigate(`../verificationcode/${values.email}/${true}`);
				} else {
					alert(response?.data?.errors?.email || response.data.message)
				}
			} catch (error) {
				alert(error?.response?.data?.Message || 'Something went wrong!!!');
			}
		} else {
			alert("Password No Match");
		}

	}
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
						<h1 className="whitespace-nowrap">Create new account</h1>
						<p className="text-lg text-[#64748B] font-normal sm:pt-3.5 xl:pr-8">Please enter your details to create account</p>
						<div className="w-full pt-7 sm:pt-9">
							<Formik
								initialValues={initialState}
								validationSchema={ValidationSchema}
								onSubmit={handelRegister}>
								{({ errors, touched, formik }) => (
									<Form className="space-y-4">
										<div>
											<label htmlFor="" className="input-titel">First Name</label>
											<Field type="text" name="first_name" value={formik?.values.first_name} className="input_box placeholder:text-[#94A3B8] placeholder:text-base" placeholder='Enter first name' required />
										</div>
										<ErrorMessage
											name="first_name"
											component="span"
											className="text-[#FB7181] text-xs font-semibold leading-4"
										/>
										<div>
											<label htmlFor="" className="input-titel">Last Name</label>
											<Field type="text" name="last_name" value={formik?.values.last_name} className="input_box placeholder:text-[#94A3B8] placeholder:text-base" placeholder='Enter last name' required />
										</div>
										<ErrorMessage
											name="last_name"
											component="span"
											className="text-[#FB7181] text-xs font-semibold leading-4"
										/>
										<div className='relative'>
											<label htmlFor="" className="input-titel relative">Email</label>
											<Field type="email" name="email" value={formik?.values.email} className="input_box placeholder:text-[#94A3B8] placeholder:text-base" placeholder='Enter email' required />
											<Link className='text-base text-[#29A073] font-extrabold absolute top-1/2 right-5'>Verify</Link>
										</div>
										<ErrorMessage
											name="email"
											component="span"
											className="text-[#FB7181] text-xs font-semibold leading-4"
										/>
										<div>
											<label htmlFor="" className="input-titel"> Phone number</label>
											<Field type="tel" name="phone_no" value={formik?.values.phone_no} className="input_box placeholder:text-[#94A3B8] placeholder:text-base" placeholder='Enter phone number' required />
										</div>
										<ErrorMessage
											name="phone_no"
											component="span"
											className="text-[#FB7181] text-xs font-semibold leading-4"
										/>
										<div>
											<label htmlFor="" className="input-titel">Password</label>
											<Field type="password" name="password" value={formik?.values.password} placeholder='Enter your password' className="input_box placeholder:text-[#94A3B8] placeholder:text-base" required />
										</div>
										<ErrorMessage
											name="password"
											component="span"
											className="text-[#FB7181] text-xs font-semibold leading-4"
										/>
										<div>
											<label htmlFor="" className="input-titel">Confirm Password</label>
											<Field type="Password" name="password2" value={formik?.values.password2} placeholder='Enter password again' className="input_box placeholder:text-[#94A3B8] placeholder:text-base" required />
										</div>
										<ErrorMessage
											name="password2"
											component="span"
											className="text-[#FB7181] text-xs font-semibold leading-4"
										/>
										<button type='submit' className="btn-primary w-full py-[15px] uppercase text-base leading-7 font-extrabold" >Register Now</button>
										<span className="block text-sm text-[#94A3B8] font-bold text-center">Already have an account?<Link to="../" className='text-yankeesBlue font-bold ml-1'>Sign in</Link></span>
									</Form>
								)}
							</Formik>
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

export default Register