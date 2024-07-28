import React from "react";

const LogIn = () => {
  return (
    <div>
      <h2>
        Welcome to <span>Workflo</span>!
      </h2>
      <form>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" placeholder="Your Email" />
        <label htmlFor="password">Email</label>
        <input type="password" id="password" placeholder="Password" />
        <button>Login</button>
      </form>
      <p>
        Don&apos;t have an account? Create a <a href="">new account.</a>
      </p>
    </div>
  );
};

export default LogIn;
