import { AuthContext } from "@/context/auth/auth";
import { useContext } from "react";

export const useAuthContext = () => {
  const authContext = useContext(AuthContext);
  if (!authContext) {
    throw new Error("You must use Auth contect within Auth Context provider");
  }
  return authContext;
};
