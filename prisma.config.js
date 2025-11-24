import 'dotenv/config'
import { defineConfig, env } from 'prisma/config'

export default defineConfig({
  schema: './prisma/schema.prisma',
  migrations: {
    path: './prisma/migrations',
  },
  datasource: {
    url: env('DATABASE_URL'),
  },

  // 👇 เพิ่มส่วนนี้เข้าไป
  seed: {
    run: './prisma/seed.js',
  },
})
