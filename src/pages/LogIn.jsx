import React, { useState } from 'react';
import "../css/LogIn.css";
import Logo from "../images/Group 9282 (1).png";
import { useNavigate } from "react-router-dom";
import { useAuth } from '../context/Auth';
import { toast } from "react-toastify";
import { Link } from 'react-router-dom';
import IconGog from "../images/google.png";



const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const { login } = useAuth();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleCheckboxChange = (e) => setRememberMe(e.target.checked);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      return toast.error("Please enter both email and password");
    }
    if (!rememberMe) {
      return toast.error('Please agree to Remember Me');
    }
    try {
      setLoading(true);
      const data = await login(email, password, rememberMe);
      if (data) {
        toast.success("Login successful");
        setTimeout(() => {
          navigate('/properties');
        }, 3000); // Redirect after 3 seconds
      } else {
        toast.error("Login failed. Please check your credentials and try again.");
      }
    } catch (err) {
      console.error(err);
      toast.error("An error occurred. Please try again later.");
      setLoading(false);
    }
  };

  return (
    <div className='login'>
      <div className="login-body m-auto flex w-full h-screen">
        <div className="inputfield">
          <div className="inner-login m-auto">
            <div className="inHeader w-3/4 h-32 mt-20">
              <h1 className='signupH font-semibold text-2xl mb-2'>Welcome Back to BetaHouse! </h1>
              <p>Let's get started by filling out the information below</p>
            </div>

            <form className="form mt-2" onSubmit={handleSubmit}>
              <div className="email flex flex-col mb-8">
                <label htmlFor="email" className='label font-medium text-base'>Email</label>
                <input 
                  id='email'
                  type="email" 
                  placeholder='Enter Your Email'
                  className='nameIn border-1 border-gray-700 rounded p-2.5'
                  value={email}
                  onChange={handleEmailChange}
                  autoComplete='on'
                />
              </div>

              <div className="password flex flex-col mb-8">
                <label htmlFor="password" className='label font-medium text-base'>Password</label>
                <input 
                  id='password'
                  type="password" 
                  placeholder='Enter Your Password' 
                  className='nameIn border-1 border-gray-700 rounded p-2.5'
                  value={password}
                  onChange={handlePasswordChange}
                  autoComplete='on'
                />
              </div>

              <div className="terms flex justify-between mb-6">
                <div className="real-terms flex gap-2">
                  <input 
                    type="checkbox" 
                    id="terms" 
                    className='termsCheck p-2.5'
                    checked={rememberMe}
                    onChange={handleCheckboxChange} 
                  />
                  <label htmlFor="terms" className='terms-label font-medium text-base'>Remember Me</label>
                </div>
                <div className="forgot text-red-600">
                  <p>Forgot Password</p>
                </div>
              </div>

              <div className="signupbtn flex flex-col items-center">
                <button type="submit" className='loginBtn w-full h-16 font-medium bg-green-800 rounded-2xl mt-2 mb-8' disabled={loading}>
                {loading ? 'Loading....' : 'Login'}
                </button>
                <div>
                  <hr className="or w-8 text-red-300"/>
                </div>
                <div className="google w-11/12 h-16 mb-10 flex gap-2 border-1 rounded-xl border-gray-600 items-center justify-center">
                  <img src={IconGog} alt="" className='google-icon'/>
                  <button className='gogbtn'>Continue with Google</button>
                </div>
              </div>
            </form>

            <div className="formF flex gap-1 justify-center items-center">
              <p style={{textAlign: "center"}}>New User?</p>
              <Link to="/signup" className='sign text-green-700 font-normal text-lg'>Sign Up</Link>
            </div>
          </div>
        </div>

        <div className="bgImg">
          <img src={Logo} alt="BetaHouse Logo" className='better pt-14'/>
        </div>
      </div>
    </div>
  );
}

export default Login;



















// import React, { useState }  from 'react';
// import "../css/LogIn.css";
// import Logo from "../images/Group 9282 (1).png";
// import IconGog from "../images/google.png";
// import { useNavigate, useLocation, Link } from "react-router-dom";
// import { toast } from "react-toastify";
// import { useAuth } from '../context/Auth';



// const Login = () => {
//      // hooks/
//   const [email, setEmail] = useState("gidi@email.com");
//   const [password, setPassword] = useState("password");
//   const [loading, setLoading] = useState(false);

//   const navigate = useNavigate();
//   const  login  = useAuth();
  
    
//   const handleEmailChange = (e) => {
//     setEmail(e.target.value);
//   };
//   const handlePasswordChange = (e) => {
//     setPassword(e.target.value);
//   };
//   const handleSubmit = async (e) => {
//     e.preventDefault();


//     if (!email || !password) {
//       return toast.error("Enter all fields");
//     }
//     const emailRegex = /\S+@\S+\.\S+/;
//     if (!emailRegex.test(email)) {
//       return toast.error("invalid email address");
//     }
//     const pwdTrim = password.trim();
//     if (!password || pwdTrim.length < 6) {
//       return toast.error("Enter a valid password");
//     }
//     try {
//       setLoading(true);
//       const data = await login(email, password);
//       setLoading(false);

//       if (data) {
//         console.log(data);
//         toast.success("Login successful");
//         navigate('/');
//       } else {
//         toast.error("Login failed. try again..");
//       }
//     } catch (err) {
//       // console.log(err?.message);
//       const msg = err?.message;
//       toast.error(msg);
//       setLoading(false);
//     }
//   };

//   return (
//     <div className='login'>
//         <div className="login-body m-auto flex w-full h-screen">
//              <div className="inputfield">
//                 <div className="inner-login m-auto">

//                 <div className="inHeader w-3/4 h-32 mt-20">
//                 <h1 className='signupH font-semibold text-2xl mb-2'>Welcome Back to BetaHouse! </h1>
//                 <p>Lets get started by filling out the information below</p>
//                 </div>

//                 {/* inputs */}
//                 <form className="form mt-2">
//                   <div className="email flex flex-col mb-8">
//                     <label htmlFor="email" className='label font-medium text-base'>Email</label>
//                     <input 
//                     id='email'
//                     type="email" 
//                     placeholder='Enter Your Email'
//                     className='nameIn border-1 border-gray-700 rounded p-2.5'
//                     value={email}
//                     onChange={handleEmailChange}
//                     autoComplete='on'
//                      />
//                   </div>

//                   <div className="password flex flex-col mb-8">
//                     <label htmlFor="password" className='label font-medium text-base'>Password</label>
//                     <input 
//                     id='password'
//                     type="password" 
//                     placeholder='Enter Your Password' 
//                     className='nameIn border-1 border-gray-700 rounded p-2.5'
//                     value={password}
//                     onChange={handlePasswordChange}
//                     autoComplete='on'
//                     />
//                   </div>

//                   <div className="terms flex justify-between mb-6">
//                     <div className="real-terms flex gap-2">
//                     <input 
//                     type="checkbox" 
//                     id="terms" 
//                     className='termsCheck p-2.5'/>
//                     <label htmlFor="terms" className='terms-label font-medium text-base'>Remember Me</label>
//                     </div>
//                     <div className="forgot text-red-600">
//                         <p>Forgot Password</p>
//                     </div>
//                   </div>
//                   <div className="signupbtn flex flex-col items-center">
//                     <button type="submit" className='loginBtn w-full h-16 font-medium bg-green-800 rounded-2xl mt-2 mb-8' onSubmit={handleSubmit}>Sign Up</button>
//                      <div >
//                       <hr className="or w-8 text-red-300"/>
//                      </div>
//                     <div className="google mb-10">
//                       {/* <img src={IconGog} alt="" className='google-icon'/> */}
//                       <button className='googleBtn border-1 border-gray-400 w-full rounded-2xl'>Continue With Google</button>
//                     </div>
//                   </div>
//                 </form>
//                 <div className="formF flex gap-1 justify-center">
//                   <p style={{textAlign: "center"}}>New User?</p>
//                   <a to="" className='sign text-green-700 font-normal text-lg'>Sign Up</a>
//                 </div>
//                 </div>
//              </div>
//              <div className="bgImg">
//               <img src={Logo} alt="" className='better pt-14'/>
//              </div>
//         </div>
//     </div>
//   )
// }

// export default Login