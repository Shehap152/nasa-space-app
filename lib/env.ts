import { z } from 'zod'

const serverSchema = z.object({
  GEMINI_API_KEY: z.string().min(1, 'Missing GEMINI_API_KEY'),
  NASA_APOD_API_KEY: z.string().min(1, 'Missing NASA_APOD_API_KEY'),
})

const clientSchema = z.object({
  NEXT_PUBLIC_VERCEL_ANALYTICS_ENABLED: z
    .string()
    .optional()
    .transform((v) => v === 'true'),
})

const processEnv = {
  GEMINI_API_KEY: process.env.GEMINI_API_KEY,
  NASA_APOD_API_KEY: process.env.NASA_APOD_API_KEY,
  NEXT_PUBLIC_VERCEL_ANALYTICS_ENABLED: process.env.NEXT_PUBLIC_VERCEL_ANALYTICS_ENABLED,
}

const parsedServer = serverSchema.safeParse(processEnv)
if (!parsedServer.success) {
  const issues = parsedServer.error.issues.map((i) => `${i.path.join('.')}: ${i.message}`)
  throw new Error(`Invalid server environment variables:\n${issues.join('\n')}`)
}

const parsedClient = clientSchema.safeParse(processEnv)
if (!parsedClient.success) {
  const issues = parsedClient.error.issues.map((i) => `${i.path.join('.')}: ${i.message}`)
  throw new Error(`Invalid client environment variables:\n${issues.join('\n')}`)
}

export const env = {
  ...parsedServer.data,
  ...parsedClient.data,
}


