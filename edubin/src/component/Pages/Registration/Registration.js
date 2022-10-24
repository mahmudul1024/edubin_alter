import React from "react";
import { Link } from "react-router-dom";

const Registration = () => {
  return (
    <div className="w-full max-w-md p-8 space-y-3 rounded-xl bg-yellow-400 my-5 dark:text-gray-100 mx-auto">
      <h2 className="mb-3 text-3xl font-semibold text-center">Sign Up Now</h2>
      <p className="text-sm text-center dark:text-gray-400">
        Already have an account?
        <Link
          to="/login"
          rel="noopener noreferrer"
          className="focus:underline hover:underline"
        >
          Sign In here
        </Link>
      </p>

      <form
        novalidate=""
        action=""
        className="space-y-6 ng-untouched ng-pristine ng-valid"
      >
        <div className="space-y-1 text-sm">
          <label for="name" className="block dark:text-gray-400">
            Name
          </label>
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
          />
        </div>
        <div className="space-y-1 text-sm">
          <label for="email" className="block dark:text-gray-400">
            Email
          </label>
          <input
            type="email"
            name="email"
            placeholder="email"
            className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
          />
        </div>
        <div className="space-y-1 text-sm">
          <label for="password" className="block dark:text-gray-400">
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
          />
        </div>
        <button className="block w-full p-3 text-center rounded-sm dark:text-gray-900 dark:bg-violet-400 border bg-amber-200 rounded-lg  ">
          Sign up
        </button>
      </form>
    </div>
  );
};

export default Registration;
