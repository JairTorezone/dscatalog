import { createContext } from "react";
import { TokenData } from "util/requests";

export type AuthContextData = {
  authenticated: boolean;
  tokenDatada?: TokenData;
};

export type AuthContextType = {
  authContextData: AuthContextData;
  setAuthContextData: (authContextDat: AuthContextData) => void;
};

export const AuthContext = createContext<AuthContextType>({
  authContextData: {
    authenticated: false,
  },
  setAuthContextData: () => null,
});
