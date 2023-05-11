import 'dotenv/config'

import mongooseConnect from './dbs/connecting'

const main = async () => {
  await Promise.all([mongooseConnect({ log: true })])

  await import('./bot/listeners')

  console.log('server start')
}

main()
