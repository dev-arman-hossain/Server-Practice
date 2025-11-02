import dotenv from "dotenv"

dotenv.config({quiet: true});

export const ENV={
    PORT: process.env.PORT,
    DB_URL: process.env.DB_URL,
    CLIENT_URL: process.env.CLIENT_URL,
    CLIENT_LIVE_URL: process.env.CLIENT_LIVE_URL,
    INNGEST_EVENT_KEY: process.env.INNGEST_EVENT_KEY,
    INNGEST_SIGNING_KEY: process.env.INNGEST_SIGNING_KEY,
    STREAM_API_KEY: process.env.STREAM_API_KEY,
    STREAM_API_SECRET: process.env.STREAM_API_SECRET,
}