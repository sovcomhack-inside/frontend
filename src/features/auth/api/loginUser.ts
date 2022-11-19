import { fetchAPI } from "shared/api/network";

export type LoginUserRequest = {
  email: string;
  password: string;
};

export const loginUser = (dto: LoginUserRequest) => fetchAPI.post("/api/auth/login", dto);
