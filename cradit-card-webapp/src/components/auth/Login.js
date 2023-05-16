import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import bgImage from "../../assets/images/login-images.png"
import logo from "../../assets/images/logo.png"
import topCircle from "../../assets/images/top-circle.png"
import bottomCircle from "../../assets/images/bottom-circle.png"
import { logInUser, useUser } from "../auth/authSlice"
import { useDispatch } from 'react-redux'

const Login = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { user } = useUser();
	const token = user.token;
	useEffect(() => {
		if (token != null) return navigate("../dashboard");
		// eslint-disable-next-line
	}, [token])


	const [userData, setUserData] = useState({ email: "", password: "" });
	const [error, setError] = useState(false);

	const handleLoginData = (field, value) => {
		setUserData({ ...userData, [field]: value });
	}
	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const payload = { ...userData };
			const response = await dispatch(logInUser(payload)).unwrap();
			if (response.data.status) {
				setError(false);
				navigate("../dashboard");
			} else {
				setError(true);
				setUserData({ email: "", password: "" });
			}
		} catch (error) {
			console.log(error);
		}
	}
	console.log("from logout");
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
						<h1>Welcome back</h1>
						<p className="text-lg text-[#afbcce] font-normal sm:pt-3.5 xl:pr-8">Welcome back! Please enter your details</p>
						{error && <small className='text-[#FB7181] text-xs font-semibold leading-4'>Invalid Mobile or Password Please Try Again!</small>}
						<div className="w-full pt-7 sm:pt-9">
							<form className="space-y-5">
								<div>
									<label htmlFor="" className="input-titel">Email or Phone</label>
									<input type="text" name="username" onChange={(e) => { handleLoginData("email", e.target.value); setError(false); }} value={userData.email} className="input_box placeholder:text-[#94A3B8] placeholder:text-base" placeholder='Enter your email' required />
								</div>
								<div>
									<label htmlFor="" className="input-titel">Password</label>
									<input type="Password" name="Password" onChange={(e) => { handleLoginData("password", e.target.value); setError(false); }} value={userData.password} placeholder='Enter your password' className="input_box placeholder:text-[#94A3B8] placeholder:text-base" required />
								</div>
								<div className="flex items-center justify-between">
									<div className="flex items-center">
										<label className="checkbox w-5 mr-2"><input type="checkbox" className="bg-white" /><i className="icon-right"></i></label>
										<span className="text-sm leading-5 text-yankeesBlue font-bold">Remember for 30 Days</span>
									</div>
									<Link to="../forgotpassword" className="text-yankeesBlue font-bold text-xs md:text-sm block text-right">Forgot password</Link>
								</div>
								{/* <Link to="../../dashboard" className='block'> */}
								<button type='submit' onClick={handleSubmit} className="block btn-primary w-full py-[15px] uppercase text-base leading-7 font-extrabold">Sign in</button>
								{/* </Link> */}
								<span className="block text-sm text-[#94A3B8] font-bold text-center">Don’t have an account?<Link to="../register" className='text-yankeesBlue font-bold ml-1'>Sign up for free</Link></span>
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

export default Login