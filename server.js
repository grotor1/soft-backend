const path = require("path");
const express = require("express");
const logger = require("morgan");
const config = require("config");
const mongoose = require("mongoose");

const app = express();

require('dotenv').config()

app.use(express.json({limit: "50mb", extended: true}))
app.use(logger('dev'))

app.use(express.static(path.resolve('client', 'build')));
app.use("/api/fetch", require("./routes/fetch.route"))
app.use("/api/auth", require("./routes/auth.route"))

app.get('/', (req, res) => {
    res.sendFile(path.resolve('client', 'build', 'index.html'));
});

const PORT = process.env.PORT || config.get('port') || 5000

async function start () {
    try{
        await mongoose.connect(config.get('mongoUri'), {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        })
        app.listen(PORT, () => console.log(`On air. Port: ${PORT}`))
    }catch (e) {
        console.log('Error', e.message)
        process.exit(1);
    }
}

start()