const path = require("path");
const express = require("express");
const logger = require("morgan");
const config = require("config");
const mongoose = require("mongoose");
const multer = require("multer");
const multerS3 = require("multer-s3")
const aws = require("aws-sdk");
const app = express();

require('dotenv').config()

// app.get("*", function (req, res, next) {
//     if ("https" !== req.headers["x-forwarded-proto"] && "production" === process.env.NODE_ENV) {
//         res.redirect("https://" + req.hostname + req.url);
//     } else {
//         next();
//     }
// });



app.use("/images", express.static(path.join(__dirname, "public/images")));

const s3 = new aws.S3({})

const storage = multerS3({
    s3: s3,
    bucket: "soft-platform",
    metadata: function (req, file, cb) {
        cb(null, {fieldName: file.fieldname});
    },
    key: function (req, file, cb) {
        cb(null, req.body.id
            + "_"
            + req.body.typeName
            + (req.body.index ? "_" + req.body.index : "")
            + "."
            + file.originalname.split(".")[1]
        )
    }
})



const upload = multer({storage: storage});

app.post("/api/upload", upload.single("file"), (req, res) => {
    try {
        return res.status(200).json({success: true, message: "Файл загружен"});
    } catch (error) {
        console.error(error);
    }
});

app.use(express.json({limit: "50mb", extended: true}))

app.use(logger('dev'))
app.use(express.static(path.resolve('client', 'build')));

app.use("/api/fetch", require("./routes/fetch.route"))
app.use("/api/auth", require("./routes/auth.route"))
app.get('/*', (req, res) => {
    res.sendFile(path.resolve('client', 'build', 'index.html'));
});

const http = require("http").createServer(app)

const io = module.exports.io = require('socket.io')(http, {
    cors: {
        origins: ["http://localhost:3000", "https://soft-spa.herokuapp.com", "http://localhost:5000"]
    }
})

io.on("connection", require("./socket/index"))

const PORT = process.env.PORT || config.get('port') || 5000

async function start() {
    try {
        await mongoose.connect(config.get('mongoUri'), {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        })
        await aws.config.getCredentials(function(err) {
            if (err) console.log(err.stack);
            // credentials not loaded
            else {
                console.log("Access key:", aws.config.credentials.accessKeyId);
            }
        });
        http.listen(PORT, () => console.log(`On air. Port: ${PORT}`))
    } catch (e) {
        console.log('Error', e.message)
        process.exit(1);
    }
}

start()
