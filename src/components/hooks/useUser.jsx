import { useContext } from "react";
import { UserContext } from "../Atoms/Global/UserContext";

export function useUser() {
  return useContext(UserContext);
}