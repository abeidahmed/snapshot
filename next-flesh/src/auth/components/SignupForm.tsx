import React from "react";

const SignupForm: React.FC = () => {
  return (
    <form>
      <div>
        <label htmlFor="full_name" className="form-label">
          Full name
        </label>
        <input type="text" id="full_name" required className="form-control" />
      </div>
      <div className="mt-4">
        <label htmlFor="email" className="form-label">
          Email address
        </label>
        <input type="email" id="email" required className="form-control" />
      </div>
      <div className="mt-4">
        <div className="flex items-center">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <p className="text-sm text-gray-600 ml-1">(min. 6 characters)</p>
        </div>
        <input
          type="password"
          id="password"
          required
          className="form-control"
        />
      </div>
      <div className="mt-4">
        <button type="submit" className="btn btn-primary w-full">
          Create an account
        </button>
      </div>
    </form>
  );
};

export default SignupForm;
