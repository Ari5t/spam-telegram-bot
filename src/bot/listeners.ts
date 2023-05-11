import bot from '.'
import basicHandler from './handlers/basic-handler'
import commandHandler from './handlers/command-handler'

bot.start(basicHandler.start)
bot.command('push', commandHandler.push)

bot.launch()