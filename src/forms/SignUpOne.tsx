import React, { useEffect, useRef } from "react";
import image from "../assets/Images/Rectangle 13.jpg";
import { FaGoogle } from "react-icons/fa";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import MailVerification from "./Sign-up/MailVerification";
const SignUpOne: React.FC = () => {
  const [showPassword, setShowPassword] = React.useState(false);

  const inputRef = useRef<HTMLInputElement | null>(null)
  useEffect(()=>{
    inputRef.current?.focus()
  },[])
  const handleViewPassword = () => {
    setShowPassword((prev) => !prev);
  };
  const[formData,setFormData]=React.useState({mail:"", password:"", cofirmPassword:""})

  // 

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>)=>{
    const{name, value}=e.target
    setFormData((prev)=>{
      return({...prev, [name]: value})
    })
  }
   const handleSubmit =(e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault()
    console.log(formData)
    setVerifyModal(true)
   }

   const[verifyModal, setVerifyModal]= React.useState(false)

  return (

    <>
    {
        verifyModal?
        (<MailVerification/>):
        null
    }
      <div className="flex h-screen w-full overflow-hidden">
      <div className="flex-1 p-5 md:p-16">
        <div>
          <NavLink
            className="text-base font-normal text-dark_gray opacity-80"
            to="/home"
          >
            Back
          </NavLink>

          {/* Form ui srarts here */}
          <div className=" w-full  mt-24 space-y-5">
            <div className="space-y-10">
              <button className="flex rounded-3xl py-3 items-center justify-center space-x-4 border-2 w-full">
                <FaGoogle /> <span>continue with google</span>
              </button>
              <hr />
            </div>

            <form className="flex flex-col items-center space-y-4" onSubmit={handleSubmit}>
              {/* Email */}
              <div className="w-full">
                <label htmlFor="mail">
                  Email: <span className="text-red-500 text-2xl">*</span>
                </label>
                <input
                  className="w-full border-2 rounded-3xl focus:border-gray-400 focus:outline-dark_purple p-3"
                  type="text"
                  name="mail"
                  value={formData.mail}
                  ref={inputRef}
                  onChange={(e)=>handleChange(e)}
                  placeholder="Enter email address"
                  required
                />
              </div>

              {/* Password */}
              <div className="w-full relative">
                <label htmlFor="password">
                  Password: <span className="text-red-500 text-2xl">*</span>
                </label>
                <input
                  className="w-full border-2 rounded-3xl focus:border-gray-400 focus:outline-dark_purple p-3"
                  type={`${showPassword ? 'text': 'password'}`}
                  name="password"
                  value={formData.password}
                  onChange={(e)=>handleChange(e)}
                  placeholder="Enter password"
                  required
                />
                <span
                  onClick={handleViewPassword}
                  className="text-dark_gray opacity-80 text-2xl absolute right-2 top-12 hover:cursor-pointer"
                >
                  {showPassword ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
                </span>
              </div>

              {/* Confirm password */}
              <div className="w-full relative">
                <label htmlFor="password">
                  Confirm assword: <span className="text-red-500 text-2xl">*</span>
                </label>
                <input
                  className="w-full border-2 rounded-3xl focus:border-gray-400 focus:outline-dark_purple p-3"
                  type={`${showPassword ? 'text': 'password'}`}
                  name="cofirmPassword"
                  value={formData.cofirmPassword}
                  onChange={(e)=>handleChange(e)}
                  placeholder="Confirm password"
                  required
                />
                <span
                  onClick={handleViewPassword}
                  className="text-dark_gray opacity-80 text-2xl absolute right-2 top-12 hover:cursor-pointer"
                >
                  {showPassword ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
                </span>
              </div>
              {/* Confrim password end here */}

              <button className="py-2.5 px-4 bg-dark_purple rounded-3xl text-white w-[50%] mt-4">
                Sign Up
              </button>
            </form>
            <div>
              <p className="mt-16 text-base text-dark_gray text-center opacity-80">
                Already have an account?{" "}
                <NavLink className="text-[#2075FF]" to="/login">
                  Click here
                </NavLink>{" "}
                to sign in
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden md:block w-[55%]">
        <img className="w-full h-full" src={image} alt="" />
      </div>
    </div>
    </>
  );
};
export default SignUpOne;
