import React from "react";
import LoginForm from "auth/components/LoginForm";

const Login: React.FC = () => {
  return (
    <main className="flex items-center justify-center min-h-screen py-12 bg-gray-100 sm:px-6 lg:px-8">
      <div className="w-full">
        <div className="px-4">
          <h2 className="mt-6 text-3xl font-extrabold leading-9 text-center text-gray-900">
            Sign in to your account
          </h2>
        </div>
        <div className="w-full sm:max-w-md mx-auto">
          <div className="px-10 py-8 mt-8 bg-white shadow sm:rounded-md">
            <LoginForm />
            <div className="mt-4">
              <p className="text-sm text-gray-600">
                By signing in you agree to our{" "}
                <a
                  href="/"
                  className="font-medium underline transition duration-150 ease-in-out hover:text-gray-500"
                >
                  terms and conditions
                </a>
                .
              </p>
            </div>
            <hr className="my-5" />
            <div>
              <h3 className="text-gray-700 text-sm">New to our platform?</h3>
              <div className="mt-4">
                <a href="/" className="btn btn-default w-full">
                  Create an account
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Login;
