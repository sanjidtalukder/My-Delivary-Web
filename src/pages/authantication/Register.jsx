import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';
import SocialLoin from './socialLogin/SocialLoin';


const Register = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const {creatUser}= useAuth()

  const onSubmit = (data) => {
    console.log("Registration Data:", data);
    creatUser(data.email,data.password)
    .then(result =>{
      console.log(result.user)
    })
    .catch(error => {
      console.error(error);
    })
  };

  const password = watch('password');

  return (
    <div className=" bg-white rounded-lg shadow-lg overflow-hidden">

        <h2 className="text-2xl font-bold mb-6 text-center text-green-700">
          Create Your Account
        </h2><br></br>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Name */}
          <div>
            <label className="label">Full Name</label>
            <input
              type="text"
              {...register("name", { required: "Name is required" })}
              className="input input-bordered w-full"
              placeholder="Enter your name"
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="label">Email</label>
            <input
              type="email"
              {...register("email", { required: "Email is required" })}
              className="input input-bordered w-full"
              placeholder="Enter your email"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
            )}
          </div>

          {/* Password */}
          <div>
            <label className="label">Password</label>
            <input
              type="password"
              {...register("password", {
                required: "Password is required",
                pattern: {
                  value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/,
                  message: "Minimum 6 characters with letters & numbers",
                },
              })}
              className="input input-bordered w-full"
              placeholder="Create a password"
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
            )}
          </div>

          {/* Confirm Password */}
          <div>
            <label className="label">Confirm Password</label>
            <input
              type="password"
              {...register("confirmPassword", {
                required: "Confirm password is required",
                validate: (value) =>
                  value === password || "Passwords do not match",
              })}
              className="input input-bordered w-full"
              placeholder="Re-enter password"
            />
            {errors.confirmPassword && (
              <p className="text-red-500 text-sm mt-1">
                {errors.confirmPassword.message}
              </p>
            )}
          </div>

          {/* Submit */}
          <button type="submit" className="btn btn-success w-full mt-4">
            Register
          </button>

          {/* Login link */}
          <p className="text-center mt-4 text-sm text-gray-600">
            Already have an account?{" "}
            <a href="/login" className="text-green-600 underline">
              Login here
            </a>
          </p>
        </form>
        <SocialLoin></SocialLoin>
      </div>
    
  );
};

export default Register;
