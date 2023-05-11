import { Telegraf } from 'telegraf'

const token = process.env.BOT_TOKEN as string

export default new Telegraf(token)