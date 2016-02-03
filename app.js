var app = {};

app.root_path = __dirname;

app.server = require('./modules/server')(app);
app.server.create();

app.socket = require('./modules/socket')(app);
app.socket.init();

app.messages = require('./modules/messages')(app);