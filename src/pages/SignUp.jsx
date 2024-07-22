import React, { useState } from 'react';
import "../css/SignUp.css";
import { toast } from "react-toastify";
import Logo from "../images/Group 9282 (1).png";
import IconGog from "../images/google.png";
import { useNavigate } from "react-router";
import { useAuth } from "../context/Auth";
import { Link } from 'react-router-dom';
// import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";



const SignUp = () => {
  const [name, setName] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [agreeTerms, setAgreeTerms] = useState(false); 
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);


  const navigate = useNavigate();
  const { signup }  = useAuth();

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastname(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setConfirmPassword('');
    setPasswordError('');
  };

  const handleConfirmPasswordChange = (e) => {
    const value = e.target.value;
    setConfirmPassword(value);
    if (password && value !== password) {
      setPasswordError('Passwords do not match');
    } else {
      setPasswordError('');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (!name || !lastname || !email || !password || !confirmPassword) {
      toast.error('Please fill in all fields');
      return;
    }
  
    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(email)) {
      toast.error('Invalid email address');
      return;
    }
  
    const pwdTrim = password.trim();
    if (pwdTrim.length < 6) {
      toast.error('Password must be at least 6 characters long');
      return;
    }
  
    if (password !== confirmPassword) {
      toast.error('Passwords do not match');
      return;
    }
    try {
      setLoading(true);
      const data = await signup(name, lastname, email, password);
  
      if (data && !data.error) {
        toast.success('Registration successful');
        setLoading(false);
        setTimeout(() => {
          navigate('/');
        }, 3000); // Redirect after 3 seconds
      } else {
        toast.error('Registration failed');
        setLoading(false);
      }
    } catch (err) {
      console.error(err);
      const errorMessage = err?.response?.data?.error || 'An error occurred';
      toast.error(errorMessage);
      setLoading(false);
    }
  };
  
  return (
    <div className='signup'>
      <div className="signup-body m-auto flex w-full">
        <div className="inputfield">
          <div className="inner-signup m-auto">
            <div className="inHeader w-full h-32 mt-20 lg:w-3/4">
              <h1 className='signupH w-full font-bold text-lg lg:font-semibold lg:text-2xl lg:mb-2'>Join our community of home <br /> seekers and explore the possibilities <br />that await. </h1>
              <p>Lets get started by filling out the information below</p>
            </div>

            <form className="form mt-8" onSubmit={handleSubmit}>
              <div className="names grid lg:grid-cols-2 gap-6">
                <div className="First-name flex flex-col">
                  <label htmlFor='name' className='name font-medium text-base'>First Name</label>
                  <input 
                    type="text" 
                    id='name'
                    placeholder="Enter Name" 
                    className='nameIn border-1 border-gray-700 p-2.5 rounded'
                    value={name}
                    autoComplete='no'
                    onChange={handleNameChange}
                  />
                </div>

                <div className="lastName flex flex-col mb-8">
                  <label htmlFor='lastname' className='label font-medium text-base'>Last Name</label>
                  <input 
                    id='lastname'
                    type="text" 
                    placeholder='Enter Name' 
                    className='nameIn border-1 border-gray-700 rounded p-2.5'
                    value={lastname} 
                    onChange={handleLastNameChange}
                  />
                </div>
              </div>

              <div className="email flex flex-col mb-8">
                <label htmlFor='email' className='label font-medium text-base'>Email</label>
                <input 
                  id='email'
                  type="email" 
                  placeholder='Enter Your Email' 
                  className='nameIn border-1 border-gray-700 rounded p-2.5'
                  value={email}
                    autoComplete='no'
                  onChange={handleEmailChange}
                />
              </div>

              <div className="password flex flex-col mb-8">
                <label htmlFor='passwordInput' className='label font-medium text-base'>Password</label>
                <input 
                  id="passwordInput"
                  type="password" 
                  placeholder='Enter Your Password' 
                  className='nameIn border-1 border-gray-700 rounded p-2.5'
                  value={password}
                  onChange={handlePasswordChange}
                />
                {/* <span onClick={() => setShowPassword(!showPassword)}>
                      {showPassword ? (
                        <IoEyeOutline className="icon-m" />
                      ) : (
                        <IoEyeOffOutline className="icon-m" />
                      )}
                    </span> */}
              </div>

              <div className="confirm-pass flex flex-col mb-8">
                <label htmlFor='confirmPasswordInput' className='label font-medium text-base'>Confirm Password</label>
                <input
                  id="confirmPasswordInput"
                  type="password" 
                  placeholder='Confirm Your Password' 
                  className='nameIn border-1 border-gray-700 rounded p-2.5'
                  value={confirmPassword}
                  onChange={handleConfirmPasswordChange}
                />
                {passwordError && <p className="text-red-500 text-sm mt-1">{passwordError}</p>}
              </div>

              <div className="terms flex items-center gap-2 mb-6">
                <input 
                type="checkbox" 
                id="terms" 
                name="terms" 
                className='termsCheck p-4'
                />
                <p className='terms-label font-medium text-base'>I agree to <Link to="" className='termsA text-green-700'>Terms of Service</Link> and <Link to='' className='termsA text-green-700'>Privacy Policy</Link></p>
              </div>
              <div className="signupbtn flex flex-col items-center">
                <button type="submit" className='signupBtn w-full h-16 font-medium bg-green-800 rounded-2xl mt-2 mb-8'>Sign Up</button>
                <div >
                  <hr className="or w-8 text-red-300"/>
                </div>
                <div className="google w-11/12 h-16 mb-10 flex gap-2 border-1 rounded-xl border-gray-600 items-center justify-center">
                  <img src={IconGog} alt="" className='google-icon'/>
                  <button className='gogbtn'>Continue with Google</button>
                </div>
              </div>
            </form>
            <div className="formF flex gap-1 justify-center items-center">
              <p style={{textAlign: "center"}}>Already have an account?</p>
              <Link to="/login" className='sign text-green-700 font-normal text-lg'>Sign in</Link>
            </div>
          </div>
        </div>
        <div className="bgImg">
          <img src={Logo} alt="" className='better pt-14'/>
        </div>
      </div>
    </div>
  );
};

export default SignUp;








