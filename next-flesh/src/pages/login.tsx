import Link from "next/link";
import LoginForm from "auth/components/LoginForm";
import Focused from "core/templates/Focused";

const Login: React.FC = () => {
  return (
    <Focused title="Sign in to your account">
      <LoginForm />
      <div className="mt-4">
        <p className="text-sm text-gray-600">
          By signing in you agree to our{" "}
          <a href="/" className="font-medium underline link-secondary">
            terms and conditions
          </a>
          .
        </p>
      </div>
      <hr className="my-5" />
      <div>
        <h3 className="text-gray-700 text-sm">New to our platform?</h3>
        <div className="mt-4">
          <Link href="/signup">
            <a className="btn btn-default w-full">Create an account</a>
          </Link>
        </div>
      </div>
    </Focused>
  );
};

export default Login;
