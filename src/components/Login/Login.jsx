
import React from 'react';
import { useForm } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';

import "./Login.css";

export default function Login() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => {console.log(data.email,data.password); } 
  return (
   
  <section className="bg-gray-50">
  <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
   
    <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 ">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold ">
                  Login your account
              </h1>
              <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit(onSubmit)}>
                  <div>
                      <label for="email" className="block mb-2 text-sm ">Your email</label>
                  <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-green-600 focus:border-green-600 block w-full p-2.5 " placeholder="name@company.com"     
          
                  {...register("email", { required: "Email Address is required",minLength: {
            value: 11,
            message: "This input must exceed 10 characters"
          } })} 
                />
<ErrorMessage errors={errors} name="email"  />
                  </div>
                  <div>
                      <label for="password" className=" mb-2 text-sm  ">Password</label>
                <input type="password" name="password" id="password" placeholder="••••••••" className=" border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-green-600 focus:border-green-600 block w-full p-2.5   "      {...register("password", { required: "password Address is required",minLength: {
            value: 11,
            message: "This input must exceed 10 characters"
          } })} />
                <ErrorMessage errors={errors} name="password"  />
                  </div>
                 
                  <button type="submit" className="w-full text-white bg-green-600  rounded-lg text-sm px-5 py-2.5 text-center ">Sign in</button>
                  
              </form>
          </div>
      </div>
  </div>
</section>

  );
}