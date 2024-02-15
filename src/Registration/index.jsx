import React, { useState } from 'react'
import registration_logo from '../imges/registration_logo.svg'
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { API } from "../API";
import { registerUser } from '../services/actionCreator';

const data = {
	fname: "",
	lname: "",
	email: "",
	mobile: "",
	address: "",
	address1: "",
	city: "",
	state: "",
	postal_code: "",
	password: ""
}

const Registration = () => {
	const [accountType, setAccountType] = useState(1)
	const [formData, setFromData] = useState({ ...data });

	const navigate = useNavigate();

	const updateFromData = (e, fieldName) => {
		const { value } = e.target
		let _fromData = {...formData};
		_fromData[fieldName] = value;
		setFromData(_fromData)

	}
	const handleSubmit = () => {

			const reqBody = {
				fname: formData.fname,
				lname: formData.lname,
				email: formData.email,
				account_type: formData.account_type,
				mobile: formData.mobile,
				address: formData.address,
				address1: formData.address1,
				city: formData.city,
				state: formData.state,
				postal_code: formData.postal_code,
				password: formData.password,
				account_type: accountType ? "company" : "user"
			};
	  
			registerUser(reqBody).then((data) => {
				navigate('/')			
			}).catch((err) => {
				console.log("error -=-=-= ", err)
			})
	  
		  }
	return (
		<>
			<div className="container">
				<div className="row">
					<div className="col-md-6 w-100">
						<div className="card my-5 d-flex">
							<div className="row">
								<div className='col-md-6 '>
									<h2 className="text-dark mt-5 text-center">Create An Account</h2>
									<div className=" mb-5 font-weight-bold brand-color-text text-center text-uppercase">
										Already an user? {" "}
										<a className="text-decoration-none" href="/">
											Sign In
										</a>
									</div>
									<form className='card-body cardbody-color p-lg-5 text-left'>
										<div className='row mt-3'>
											<span>Account Type</span>
											<div className='col-md-12'>
												<div class="form-check form-check-inline mt-1">
													<input class="form-check-input" type="radio" checked={accountType == 0 ? true : false} value='company' onChange={() => setAccountType(0)} />
													<label class="form-check-label" for="inlineRadio1">Company</label>
												</div>
												<div class="form-check form-check-inline">
													<input class="form-check-input" type="radio" checked={accountType == 1 ? true : false} value='user' onChange={() => setAccountType(1)} />
													<label class="form-check-label" for="inlineRadio2">User</label>
												</div>
											</div>
										</div>
										{accountType == 1 &&
											<div className="row mt-3">
												<div className="col-md-6">
													<div className="form-group">
														<label id="name-label" className='mb-1' for="name">First Name</label>
														<input 
															type="text" 
															name="fname" 
															value={formData.fname} 
															placeholder="Enter your first name" 
															className="form-control" 
															onChange={(e) => updateFromData(e, "fname")}
														/>
													</div>
												</div>
												<div className="col-md-6">
													<div className="form-group">
														<label id="name-label" className='mb-1' for="name">Last Name</label>
														<input
															type="text"
															name="lname"
															className="form-control"
															value={formData.lname}
															placeholder="Enter your last name"
															required
															onChange={(e) => updateFromData(e, "lname")}
														/>
													</div>
												</div>
											</div>
										}
										{accountType == 0 && <div className="row mt-3">
											<div className="col-md-12">
												<div className="form-group">
													<label id="name-label" className='mb-1' for="name">Company Name</label>
													<input type="text" name="fname" id="fname" placeholder="Enter your company" className="form-control" required />
												</div>
											</div>
										</div>}
										<div className='row mt-3'>
											<div className='col-md-6'>
												<div className="form-group">
													<label id="email-label" className='mb-1' for="email">Email</label>
													<input 
														type="email" 
														name="email" 
														id="email" 
														value={formData.email} 
														placeholder="Enter email" 
														className="form-control" 
														required 
														onChange={(e) => updateFromData(e, "email")}
													/>
												</div>
											</div>
											<div className='col-md-6'>
												<div className="form-group">
													<label id="mobile-label" className='mb-1' for="mobile">Mobile</label>
													<input 
														type="number" 
														name="mobile" 
														id="mobile" 
														value={formData.mobile} 
														placeholder="Enter mobile" 
														className="form-control" 
														required 
														onChange={(e) => updateFromData(e, "mobile")}
													/>
												</div>
											</div>
										</div>
										<div className='row mt-3'>
											<div className='col-md-6'>
												<div className="form-group">
													<label id="address-label" className='mb-1' for="address-label">Address</label>
													<input 
														type="text" 
														id="address-label" 
														placeholder="Enter address" 
														value={formData.address} 
														className="form-control" 
														required 
														onChange={(e) => updateFromData(e, "address")}
													/>
												</div>
											</div>
											<div className='col-md-6'>
												<div className="form-group">
													<label id="address1-label" className='mb-1' for="address1-label">Address 1</label>
													<input 
														type="text" 
														name="address1-label" 
														id="address1-label" 
														value={formData.address1} 
														placeholder="Enter address1" 
														className="form-control" 
														required 
														onChange={(e) => updateFromData(e, "address1")}
													/>
												</div>
											</div>
										</div>
										<div className='row mt-3'>
											<div className='col-md-4'>
												<div className="form-group">
													<label id="city-label" className='mb-1' for="city-label">City</label>
													<input 
														type="text" 
														id="city-label" 
														placeholder="Enter city" 
														value={formData.city} 
														className="form-control" 
														required 
														onChange={(e) => updateFromData(e, "city")}
													/>
												</div>
											</div>
											<div className='col-md-3'>
												<div className="form-group">
													<label id="state-label" className='mb-1' for="state-label">State</label>
													<input 
														type="text" 
														name="state-label" 
														id="state-label" 
														value={formData.state} 
														placeholder="Enter state" 
														className="form-control" 
														required 
														onChange={(e) => updateFromData(e, "state")}
													/>
												</div>
											</div>
											<div className='col-md-3'>
												<div className="form-group">
													<label id="postal-label" className='mb-1' for="postal-label">Postal Code</label>
													<input 
														type="text" 
														name="postal-label" 
														id="postal-label" 
														value={formData.postal_code} 
														placeholder="Enter Postal Code" 
														className="form-control" 
														required 
														onChange={(e) => updateFromData(e, "postal_code")}
													/>
												</div>
											</div>
										</div>
										<div className='row mt-3'>
											<div className='col-md-12'>
												<div className="form-group">
													<label id="password-label" className='mb-1' for="password">Password</label>
													<input 
														type="password" 
														name="password" 
														id="password" 
														value={formData.password} 
														placeholder="Enter password" 
														className="form-control"
														required 
														onChange={(e) => updateFromData(e, "password")}
													/>
												</div>
											</div>
										</div>
										<div className="text-center"><button type="button" className="btn brand-bg text-white px-5 mt-5  w-50" onClick={() => handleSubmit()} >Sign Up</button></div>

									</form>
								</div>
								<div className='col-md-6 d-flex'>
									<img src={registration_logo} alt="My SVG" fill="red" />
								</div>
							</div>
						</div>

					</div>

				</div>
			</div>
		</>
	)
}

export default Registration


