"use client";
import axios from "axios";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

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
      console.log("User successfully signed up");
      router.push("/dashboard");
    } catch (error: any) {
      if (error.response && error.response.data && error.response.data.error) {
        setError(error.response.data.error);
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
          />
          <button type="submit" className="flex justify-center items-center">
            Sign up
          </button>
        </form>
        <p className="flex justify-center items-center">
          Already have an account? <a href=""> Log in</a>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
