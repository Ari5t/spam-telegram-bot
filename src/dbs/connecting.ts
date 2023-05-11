import mongoose from 'mongoose'

const env = process.env

const url = new URL(`${env.MONGO_DB_PROTOCOL}://${env.MONGO_DB_HOSTNAME}/`)
// url.username = env.MONGO_DB_USERNAME ?? ''
// url.password = env.MONGO_DB_PASSWORD ?? ''
url.port = env.MONGO_DB_PORT as string
url.pathname = env.MONGO_DB_NAME as string
url.search = env.MONGO_DB_PARAMETERS as string


const mongooseConnect = async ({ log = false } = {}) => {
  try {
    await mongoose.connect(url.href)

    if (log) {
      console.log(`MongoDB сonnected at ${url}`)
    }
  } catch (error: any) {
    console.log(`Mongoose ${error.message}`)
    process.exit(1)
  }
}

export default mongooseConnect
