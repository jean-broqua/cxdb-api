import * as dotenv from 'dotenv'
import { connect } from 'mongoose'

dotenv.config({ path: __dirname + '/.env' })

export default async function MoogooseConnection() {
  await connect(process.env.DB_URI)
}
