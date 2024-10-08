/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./utils/schema.tsx",
    dialect: 'postgresql',
    dbCredentials: {
      url: 'postgresql://Data_owner:rYpLmztb98MW@ep-withered-grass-a57q9t2h.us-east-2.aws.neon.tech/Data?sslmode=require',
    }
  };