import { config } from "dotenv"
config()

export default {
  MONGODB_URI: process.env.MONGODB_URI || "mongodb://localhost:27017/acmedb",
  PORT: process.env.PORT || 3000,
  SECRET: 'ACME-Hotel-API-UAM-2020'
}