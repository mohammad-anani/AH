import * as jwtDecode from "jwt-decode";

export type JwtPayload = {
  sub: string; // user ID
  email?: string;
  role?: string;
  exp: number; // expiration (seconds since epoch)
  iat?: number; // issued at (optional)
};

export function decodeJwt(token: string): JwtPayload | null {
  try {
    return jwtDecode.jwtDecode<JwtPayload>(token);
  } catch (error) {
    console.error("Invalid JWT:", error);
    return null;
  }
}

export function isJwtExpired(decoded: JwtPayload): boolean {
  if (!decoded) return true;
  return decoded.exp * 1000 < Date.now();
}
