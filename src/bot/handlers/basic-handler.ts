import type { Context, NarrowedContext } from 'telegraf'
import type * as tt from 'telegraf/typings/telegram-types'
import type { Update } from 'telegraf/typings/core/types/typegram'

import UserModel from '../../models/user-model'

type CTX = NarrowedContext<Context<Update>, tt.MountMap['text']> & { startPayload: string }

class BasicHandler {
  public async start(ctx: CTX) {
    ctx.reply('You have subscribed!')
    await UserModel.findOneAndUpdate({ telegramId: ctx.message.from.id }, {}, {upsert: true})
  }
}

export default new BasicHandler()
