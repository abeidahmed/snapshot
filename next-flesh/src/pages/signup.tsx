import React from "react";
import Link from "next/link";
import SignupForm from "auth/components/SignupForm";
import Focused from "core/templates/Focused";

const Signup: React.FC = () => {
  return (
    <Focused title="Create an account">
      <SignupForm />
      <div className="mt-4">
        <p className="text-sm text-gray-600">
          By signing up you agree to our{" "}
          <a href="/" className="font-medium underline link-secondary">
            terms and conditions
          </a>
          .
        </p>
      </div>
      <hr className="my-5" />
      <div>
        <h3 className="text-gray-700 text-sm">Already have an account?</h3>
        <div className="mt-4">
          <Link href="/login">
            <a className="btn btn-default w-full">Sign in</a>
          </Link>
        </div>
      </div>
    </Focused>
  );
};

export default Signup;
