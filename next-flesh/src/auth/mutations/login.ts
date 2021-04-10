import axios from "axios";
import { SERVER_URL } from "core/constants";
import { responseHeaders } from "core/utils/reponseHeaders";

interface LoginMutationProps {
  email: string;
  password: string;
}

export async function loginMutation({ email, password }: LoginMutationProps) {
  return await axios.post(
    `${SERVER_URL}/api/v1/sessions`,
    {
      session: {
        email,
        password,
      },
    },
    responseHeaders()
  );
}
