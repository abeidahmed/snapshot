import axios from "axios";
import { SERVER_URL } from "core/constants";
import { responseHeaders } from "core/utils/reponseHeaders";

interface SignupMutationProps {
  full_name: string;
  email: string;
  password: string;
}

export async function signupMutation({
  full_name,
  email,
  password,
}: SignupMutationProps) {
  return await axios.post(
    `${SERVER_URL}/api/v1/users`,
    {
      user: {
        full_name,
        email,
        password,
      },
    },
    responseHeaders()
  );
}
