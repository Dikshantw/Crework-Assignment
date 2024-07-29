"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const LogIn = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const router = useRouter();
  async function handleLogIn(event: React.FormEvent) {
    event?.preventDefault();
    try {
      const response = await axios.post("api/users/login", user);
      if (response.data.error) {
        setError(response.data.error);
      } else {
        console.log("Log In Successfull");
        router.push("/dashboard");
      }
    } catch (error: any) {
      setError("Login failed. Please try again.");
      console.log("Login failed", error.message);
    }
  }
  return (
    <div className="flex justify-center bg-gradient-to-b from-white to-[#afa3ff] items-center h-screen">
      <div className="flex w-[648px] flex-col bg-gradient-to-b from-[#f7f7f7] to-[#f0f0f0] justify-center items-center border border-[#cecece] rounded-[16px] p-[60px] gap-8">
        <h2 className="text-5xl font-semibold leading-[57.6px] text-center">
          Welcome to <span className="text-[#4534ac]">Workflo</span>!
        </h2>
        <form
          onSubmit={handleLogIn}
          className="flex flex-col justify-center items-center gap-[42px]"
        >
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
            Log In
          </button>
        </form>
        {error && <p className="text-red-500">{error}</p>}
        <p className="flex justify-center items-center">
          Don&apos;t <a href=""> Log in</a>
        </p>
      </div>
    </div>
  );
};

export default LogIn;
