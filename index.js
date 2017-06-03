var linebot = require('linebot'),
    express = require('express');

const config = require('./config.json'),
    util = require('util');

var bot = linebot({
    channelId: config.channelId,
    channelSecret: config.channelSecret,
    channelAccessToken: config.channelAccessToken
});

bot.on('message', function(event) {
    // 把收到訊息的 event 印出來
    console.log(event);
});

const linebotParser = bot.parser(),
    app = express();
app.post('/webhook', linebotParser);

// 在 localhost 走 8080 port
var server = app.listen(process.env.PORT || 8080, function() {
    var port = server.address().port;
    console.log("My Line bot App running on port", port);
});
