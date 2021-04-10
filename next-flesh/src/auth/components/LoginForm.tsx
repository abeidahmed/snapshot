import React from "react";

const LoginForm: React.FC = () => {
  return (
    <form>
      <div>
        <label htmlFor="email" className="form-label">
          Email address
        </label>
        <input type="email" id="email" required className="form-control" />
      </div>
      <div className="mt-4">
        <div className="flex items-center justify-between">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <a href="/" className="link-primary">
            Forgot password?
          </a>
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
          Sign in
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
