import React from "react";

const SignUp = () => {
  return (
    <div>
      <h2>
        Welcome to <span>Workflo</span>!
      </h2>
      <form>
        <label htmlFor="fullName">Full Name</label>
        <input type="text" id="fullName" placeholder="Full Name" />
        <label htmlFor="email">Your Email</label>
        <input type="email" id="email" placeholder="Email" />
        <label htmlFor="password">Password</label>
        <input type="password" id="password" placeholder="Password" />
        <button>Sign up</button>
      </form>
      <p>
        Already have an account? <a href="">Log in</a>
      </p>
    </div>
  );
};

export default SignUp;
