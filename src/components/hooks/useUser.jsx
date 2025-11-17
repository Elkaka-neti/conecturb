import { useContext } from "react";
import { UserContext } from "@/Atoms/Global/userContext";

export function useUser() {
  return useContext(UserContext);
}