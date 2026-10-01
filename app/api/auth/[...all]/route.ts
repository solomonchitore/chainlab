import { getCloudflareContext } from "@opennextjs/cloudflare";
import { toNextJsHandler } from "better-auth/next-js";
import { authServer } from "@/lib/auth";

export const runtime = "nodejs";

async function getAuth(request: Request) {
  const { env } = await getCloudflareContext({ async: true });

  const secret = env.BETTER_AUTH_SECRET;

  const baseURL = new URL(request.url).origin;

  if (!secret) {
    throw new Error(
      "BETTER_AUTH_SECRET is missing from the Cloudflare environment."
    );
  }

  return authServer({
    database: env.chainlab_auth,
    secret,
    baseURL,
  });
}

export async function GET(request: Request) {
  const auth = await getAuth(request);

  return toNextJsHandler(auth).GET(request);
}

export async function POST(request: Request) {
  const auth = await getAuth(request);

  return toNextJsHandler(auth).POST(request);
}