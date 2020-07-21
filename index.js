







// const Telegraf = require('telegraf')

// BOT_TOKEN=  '503445753:AAFxXgba3wUI6517Xgh38VYI-9pheL-c-9Y';

// const bot = new Telegraf(BOT_TOKEN)

// //const bot = new Telegraf(process.env.BOT_TOKEN)
// bot.start((ctx) => ctx.reply('Welcome!'))
// bot.help((ctx) => ctx.reply('Send me a sticker'))
// bot.on('sticker', (ctx) => ctx.reply(''))
// bot.hears('hi', (ctx) => ctx.reply('Hey there'))
// bot.launch()


// bot.on('message', function (ctx, next) {
//     ctx.telegram.sendMessage(ctx.message.chat.id,
//       "File content at: " + new Date() + " is: \n" + file
//     )
// });







// const Telegraf = require('telegraf');
// // const HttpsProxyAgent = require('https-proxy-agent');
// let config = {
//     "token": '503445753:AAFxXgba3wUI6517Xgh38VYI-9pheL-c-9Y', 
//     "admin": 173367910
// };
// const bot = new Telegraf(config.token, {
//         // Если надо ходить через прокси - укажите: user, pass, host, port
//         // telegram: { agent: new HttpsProxyAgent('http://user:pass@host:port') }
//     }
// );
// // Текстовые настройки
// let replyText = {
//     "helloAdmin": "hello admin",
//     "helloUser":  "hello user",
//     "replyWrong": "reply wrong"
// };
// // Проверяем пользователя на права
// let isAdmin = (userId) => {
//     return userId == config.admin;
// };
// // Перенаправляем админу от пользователя или уведомляем админа об ошибке
// let forwardToAdmin = (ctx) => {
//     if (isAdmin(ctx.message.from.id)) {
//         ctx.reply(replyText.replyWrong);
//     } else {
//         ctx.forwardMessage(config.admin, ctx.from.id, ctx.message.id);
//     }
// };
// // Старт бота
// bot.start((ctx) => {
//     ctx.reply(isAdmin(ctx.message.from.id)
//         ? replyText.helloAdmin
//         : replyText.helloUser);
// });
// // Слушаем на наличие объекта message
// bot.on('message', (ctx) => {
//     // убеждаемся что это админ ответил на сообщение пользователя
//     if (ctx.message.reply_to_message
//         && ctx.message.reply_to_message.forward_from
//         && isAdmin(ctx.message.from.id)) {
//         // отправляем копию пользователю
//         ctx.telegram.sendCopy(ctx.message.reply_to_message.forward_from.id, ctx.message);
//     } else {
//         // перенаправляем админу
//         forwardToAdmin(ctx);
//     }
// });
// // запускаем бот
// bot.launch();



const Telegraf = require('telegraf');
const bot = new Telegraf('503445753:AAFxXgba3wUI6517Xgh38VYI-9pheL-c-9Y');


const btn = document.querySelector('#sendButton');
const tg_id = document.querySelector('#tg-id');
const schdl = document.querySelector('#input5');
const txtarea = document.querySelector('#exampleFormControlTextarea3');

let txtarea_val = '';
let tg_id_val = '';
let schdl_val = '';

let currentdate = new Date();

// let store = require('./store.js');


let store = {
    posts: [
    ],
    tg_id: [
    ],
    time: {
        year: [],
        month: [],
        day: [],
        hour: [],
        minute: []
    }
};

let last_post = 0;


    setInterval(() => {
        console.log(store.posts);
        if (store.posts.length != 0) {
            console.log(`store in IF: ${store.posts} ${store.tg_id} ${store.time.year} ${store.time.month} ${store.time.day} ${store.time.hour} ${store.time.minute} ${store.time.day}`);
            console.log((new Date()).getMinutes());
           
            last_post = store.posts.length - 1;

            // if (currentdate.getFullYear() == store.time.year[last_post] && currentdate.getMonth() == store.time.month[last_post] && currentdate.getDay() == store.time.day[last_post] && currentdate.getHours() == store.time.hour[last_post] && currentdate.getMinutes() == store.time.minute[last_post]) {
            if ((new Date()).getMinutes() == store.time.minute[last_post]) {
                console.log('SENDED');
                bot.telegram.sendMessage(store.tg_id[last_post], `${store.posts[last_post]} s: ${(new Date()).getTime()}`);
            }
                //bot.startPolling();
            }
        }, 1000);





btn.addEventListener("click", function () {


    let datetime = "Last Sync: " + currentdate.getDate() + "/"
        + (currentdate.getMonth() + 1) + "/"
        + currentdate.getFullYear() + " @ "
        + currentdate.getHours() + ":"
        + currentdate.getMinutes() + ":"
        + currentdate.getSeconds();


    console.log(datetime);
    console.log("clicked");
    txtarea_val = txtarea.value;
    tg_id_val = tg_id.value;
    schdl_val = schdl.value;



    store.posts.push(txtarea_val);
    store.time.year.push(schdl_val.slice(0, 4));
    store.time.month.push(schdl_val.slice(5, 7));
    store.time.day.push(schdl_val.slice(8, 10));
    store.time.hour.push(schdl_val.slice(11, 13));
    store.time.minute.push(schdl_val.slice(14, 16));
    store.tg_id.push(tg_id_val);



    console.log(`added to store: ${store.posts} ${store.tg_id} ${store.time.year} ${store.time.month} ${store.time.day} ${store.time.hour} ${store.time.minute} ${store.time.day}`);


    bot.hears('Hi', ctx => {
        return ctx.reply('hello');
    });

    // if (currentdate.getMinutes() == '23') {
    //     bot.telegram.sendMessage(966434509, txtarea_val);
    // }
    // bot.startPolling();

    // bot.on('message', function (ctx, next) {
    //     ctx.message.chat.id = 966434509;
    //     ctx.telegram.sendMessage(ctx.message.chat.id, txtarea_val)
    // });



});











