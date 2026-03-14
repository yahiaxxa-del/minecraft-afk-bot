const mineflayer = require('mineflayer')

function createBot(){

const bot = mineflayer.createBot({
  host: process.env.SERVER_IP,
  port: 25565,
  username: "AFK_Bot"
})

bot.on('spawn', () => {
  console.log("Bot joined")

  setInterval(() => {

    const actions = ["jump","look","walk"]
    const action = actions[Math.floor(Math.random()*actions.length)]

    if(action === "jump"){
      bot.setControlState("jump", true)
      setTimeout(()=>bot.setControlState("jump", false), 500)
    }

    if(action === "walk"){
      bot.setControlState("forward", true)
      setTimeout(()=>bot.setControlState("forward", false), 2000)
    }

    if(action === "look"){
      bot.look(Math.random()*Math.PI*2,0)
    }

  },10000)

})

bot.on("end", ()=>{
  console.log("reconnecting...")
  setTimeout(createBot,10000)
})

}

createBot()
