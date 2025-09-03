import { useMemo } from "react";
import { decodeJwt } from "../helpers/jwt-decoder";

export type JwtPayload = {
  sub: string; // user ID
  email?: string;
  role?: string;
  exp: number; // expiration (seconds since epoch)
  iat?: number; // issued at (optional)
};

export function useDecodedJwt() {
  return useMemo(() => {
    const token = localStorage.getItem("token");
    if (!token) return { token: null, decoded: null, expired: true };

    try {
      const decoded = decodeJwt(token);

      if (!decoded) return { token: null, expired: true };

      const expired = decoded.exp * 1000 < Date.now();
      return { token, decoded, expired };
    } catch (error) {
      console.error("Invalid JWT:", error);
      return { token: null, decoded: null, expired: true };
    }
  }, []); // No dependencies -> only runs on mount
}
