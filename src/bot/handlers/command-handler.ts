import type { Context, NarrowedContext } from 'telegraf'
import type * as tt from 'telegraf/typings/telegram-types'
import type { Update } from 'telegraf/typings/core/types/typegram'

import bot from '..'
import UserModel, { Role } from '../../models/user-model'

type CTX = NarrowedContext<Context<Update>, tt.MountMap['text']>

class CommandHandler {
  public async push(ctx: CTX) {
    const senderId = await UserModel.findOne({ role: Role.ADMIN, telegramId: ctx.chat.id })

    if (!senderId) return

    const users = await UserModel.find({ role: Role.CLIENT })
    const text = ctx.message.text
    
    for (const user of users) {
      bot.telegram.sendMessage(user.telegramId, text.substr(text.indexOf(" ") + 1))
    }

    ctx.reply('OK')
  }
}

export default new CommandHandler()
