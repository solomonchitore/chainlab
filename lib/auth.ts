import { betterAuth } from "better-auth";

type AuthConfig = {
  database: D1Database;
  secret: string;
  baseURL: string;
};

export function authServer({
  database,
  secret,
  baseURL,
}: AuthConfig) {
  if (!secret) {
    throw new Error(
      "BETTER_AUTH_SECRET is missing from the environment."
    );
  }

  return betterAuth({
    appName: "ChainLab",

    baseURL,

    secret,

    database,

    emailAndPassword: {
      enabled: true,
    },

    trustedOrigins: [
      "http://localhost:3000",
    ],
  });
}