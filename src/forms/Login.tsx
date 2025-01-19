import React, { useEffect, useRef } from "react";
import image from "../assets/Images/image (2).jpg";
import { FaGoogle } from "react-icons/fa";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { NavLink } from "react-router-dom";
const Login: React.FC = () => {
  const [showPassword, setShowPassword] = React.useState(false);
  const handleViewPassword = () => {
    setShowPassword((prev) => !prev);
  };
  const inputRef= useRef<HTMLInputElement | null>(null)
  useEffect(
    ()=>{
      inputRef.current?.focus()
    },[]
  )
  const[formData,setFormData]=React.useState({mail:"", password:""})
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>)=>{
    const{name, value}= e.target
    setFormData((prev)=>{
        return({...prev, [name]:value})
    })
  }

   const handleSubmit =(e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault()
    try{

      console.log(formData)
    }
    catch(err){
      alert(err)
    }
   }

  return (
    <div className="flex h-screen w-full overflow-hidden">
      <div className="w-full md:w-[45%] p-[5%] md:p-16 ">
        <div>
          <NavLink
            className="text-base font-normal text-dark_gray opacity-80"
            to="/"
          >
            Back
          </NavLink>

          {/* Form ui srarts here */}
          <div className=" w-full px-0 md:px-10 mt-12 md:mt-24 space-y-5">
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
                  Email<span className="text-red-500 text-2xl">*</span>
                </label>
                <input
                  className="w-full border-2 rounded-3xl focus:border-gray-400 focus:outline-customPurple py-2.5 px-3"
                  type="text"
                  ref={inputRef}
                  name="mail"
                  onChange={handleChange}
                  placeholder="Enter email address"
                  required
                />
              </div>

              {/* Password */}
              <div className="w-full relative">
                <label htmlFor="password">
                  Password<span className="text-red-500 text-2xl">*</span>
                </label>
                <input
                  className="w-full border-2 rounded-3xl focus:border-gray-400 focus:outline-customPurple py-2.5 px-3"
                  type={`${showPassword ? 'text': 'password'}`}
                  name="password"
                  onChange={handleChange}
                  placeholder="Enter password"
                  required
                />
                <span
                  onClick={handleViewPassword}
                  className="text-dark_gray opacity-80 text-2xl absolute right-2 top-12 hover:cursor-pointer"
                >
                  {showPassword ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
                </span>
                <br />
                <NavLink
                  className="block text-dark_gray opacity-80 text-base font-normal mt-4"
                  to="/forgot-password"
                >
                  Forgot password?
                </NavLink>
              </div>

              <button className="py-2.5 px-4 bg-dark_purple rounded-3xl text-white w-full md:w-[50%] mt-4">
                Login
              </button>
            </form>
            <div>
              <p className=" mt-6 md:mt-24 text-base text-dark_gray text-center opacity-80">
                Dont have an account?{" "}
                <NavLink className="text-[#2075FF]" to="/sign-up">
                  Click here
                </NavLink>{" "}
                to create one
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="hidden md:flex md:flex-1 w-full">
        <img className="h-full w-full" src={image} alt="" />
      </div>
    </div>
  );
};
export default Login;
