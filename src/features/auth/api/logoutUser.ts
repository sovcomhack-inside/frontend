import { fetchAPI } from "shared/api/network";

export const logoutUser = () => fetchAPI.delete("/api/auth/logout");
