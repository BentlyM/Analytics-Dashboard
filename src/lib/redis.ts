import { Redis } from '@upstash/redis'

export const redis = new Redis({
  url: 'https://usw2-winning-seahorse-30363.upstash.io',
  token: process.env.REDIS_KEY!,
})