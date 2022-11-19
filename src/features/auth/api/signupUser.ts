import { fetchAPI } from "shared/api/network";

export type SignupUserRequest = {
  email: string
  firstName: string
  lastName: string
  password: string
};

export const signupUser = (dto: SignupUserRequest) => fetchAPI.post("/api/auth/signup", dto);
