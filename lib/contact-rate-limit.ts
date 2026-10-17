
import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

let rateLimiter: Ratelimit | undefined;

function getRateLimiter(): Ratelimit {
  if (rateLimiter) {
    return rateLimiter;
  }

  if (
    !process.env.UPSTASH_REDIS_REST_URL ||
    !process.env.UPSTASH_REDIS_REST_TOKEN
  ) {
    throw new Error("Contact rate-limit configuration is missing.");
  }

  rateLimiter = new Ratelimit({
    redis: Redis.fromEnv(),
    limiter: Ratelimit.slidingWindow(5, "1 h"),
    prefix: "lexicor:contact",
  });

  return rateLimiter;
}

export async function checkContactRateLimit(ip: string) {
  return getRateLimiter().limit(ip);
}
