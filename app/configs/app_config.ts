import { z } from 'zod'

const appConfigSchema = z.object({
  ENCRYPTION_KEY_1: z.string(),
  ENCRYPTION_KEY_2: z.string(),
  JWT_SECRET: z.string(),
  APPLE_CLIENT_ID: z.string(),
  IOS_GOOGLE_CLIENT_ID: z.string(),
  ANDROID_GOOGLE_CLIENT_ID: z.string(),
})

const appConfig = appConfigSchema.parse({
  ENCRYPTION_KEY_1: process.env.ENCRYPTION_KEY_1,
  ENCRYPTION_KEY_2: process.env.ENCRYPTION_KEY_2,
  JWT_SECRET: process.env.JWT_SECRET,
  APPLE_CLIENT_ID: process.env.APPLE_CLIENT_ID,
  IOS_GOOGLE_CLIENT_ID: process.env.IOS_GOOGLE_CLIENT_ID,
  ANDROID_GOOGLE_CLIENT_ID: process.env.ANDROID_GOOGLE_CLIENT_ID,
})

export default appConfig
