"use client";
import axios from "axios";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const SignUp = () => {
  const router = useRouter();

  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState<string | null>(null);

  async function handleSignUp(event: React.FormEvent) {
    event.preventDefault();
    setError(null);
    try {
      const response = await axios.post("/api/users/signup", user);
      if (response.data.error) {
        setError(response.data.error);
      } else {
        console.log("User successfully signed up");
        router.push("/dashboard");
      }
    } catch (error: any) {
      if (error.response && error.response.data && error.response.data.error) {
        setError("Username already exists");
      } else {
        setError("Failed to sign up the user");
      }
    }
  }

  return (
    <div className="flex justify-center bg-gradient-to-b from-white to-[#afa3ff] items-center h-screen">
      <div className="flex w-[648px] flex-col bg-gradient-to-b from-[#f7f7f7] to-[#f0f0f0] justify-center items-center border border-[#cecece] rounded-[16px] p-[60px] gap-8">
        <h2 className="text-5xl font-semibold leading-[57.6px] text-center">
          Welcome to <span className="text-[#4534ac]">Workflo</span>!
        </h2>
        <form
          onSubmit={handleSignUp}
          className="flex flex-col justify-center items-center gap-[42px]"
        >
          <label htmlFor="fullName" className="sr-only">
            Full Name
          </label>
          <input
            value={user.username}
            onChange={(e) => {
              setUser({ ...user, username: e.target.value });
            }}
            type="text"
            id="fullName"
            placeholder="Full Name"
            className="w-[528px] h-[56px] py-4 px-3 bg-[#ebebeb] rounded-lg placeholder-[#606060] font-normal text-xl leading-[24.2px]"
          />
          <label htmlFor="email" className="sr-only">
            Your Email
          </label>
          <input
            value={user.email}
            onChange={(e) => {
              setUser({ ...user, email: e.target.value });
            }}
            type="email"
            id="email"
            placeholder="Email"
            className="w-[528px] h-[56px] py-4 px-3 bg-[#ebebeb] rounded-lg placeholder-[#606060] font-normal text-xl leading-[24.2px]"
          />
          <label htmlFor="password" className="sr-only">
            Password
          </label>
          <input
            value={user.password}
            onChange={(e) => {
              setUser({ ...user, password: e.target.value });
            }}
            type="password"
            id="password"
            placeholder="Password"
            className="w-[528px] h-[56px] py-4 px-3 bg-[#ebebeb] rounded-lg placeholder-[#999999] font-normal text-xl leading-[24.2px]"
          />
          <div className="w-fit rounded-lg mx-auto p-[0.5px] bg-gradient-to-b from-[#4b36cc] to-[#9c93d4]">
            <button className="w-[528px] h-[52px] bg-gradient-to-b from-[#4c38c2] to-[#2f2188] text-white p-2 rounded-lg gap-2 ">
              <span className="text-white font-normal text-xl leading-[24.2px]">
                Sign Up
              </span>
            </button>
          </div>
        </form>
        {error && <p className="text-red-500">{error}</p>}
        <p className="flex justify-center items-center">
          Already have an account?{" "}
          <Link href="/login" className="text-[#0054a1]">
            {" "}
            <span> Log in</span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
