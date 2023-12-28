import 'dotenv/config'
import linebot from 'linebot'
import fe from './commands/fe.js'
import be from './commands/be.js'
import classroom from './commands/classroom.js'

const bot = linebot({
  channelID: process.env.CHANNEL_ID,
  channelSecret: process.env.CHANNEL_SECRET,
  channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN
})

bot.on('message', async event => {
  if (event.message.type === 'text') {
    if (event.message.text === '前端') {
      fe(event)
    } else if (event.message.text === '後端') {
      be(event)
    } else if (event.message.text === '教室') {
      classroom(event)
    }
  }
})

bot.on('postback', event => {
  console.log(event.postback.data)
})

bot.listen('/', process.env.PORT || 3000, () => {
  console.log(' 機器人啟動')
})
