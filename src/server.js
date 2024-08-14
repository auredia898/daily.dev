const fs = require('fs')
const https = require('https')
const http = require('http')
const express = require('express') 
const dotenv = require('dotenv')
const helmet = require('helmet')
const cookieParser = require('cookie-parser');
const cors = require('cors')


const router = require('./api')

dotenv.config();

const app = express();

const PORT = process.env.PORT || 8000;

app.use(cookieParser());

// const privateKey = fs.readFileSync('./server.key', 'utf8')
// const certificate = fs.readFileSync('./server.cert', 'utf8')

// const credentials = { key: privateKey, cert: certificate}

app.use(express.json())

app.use(helmet())

app.use(
    helmet({
      contentSecurityPolicy: {
        useDefaults: false,
        directives: {
          defaultSrc: ["'self'"],
          scriptSrc: ["'self'", "https://example.com"],
          styleSrc: ["'self'", "https://example.com"],
          imgSrc: ["'self'", "https://example.com"],
          objectSrc: ["'none'"],
          upgradeInsecureRequests: [],
        },
      },
      xFrameOptions: { action: "deny" },
    }),
);

app.use(helmet.xXssProtection())

// app.use((req, res, next) =>{
//     if(req.secure){
//         return next()
//     }
//     res.redirect(`https://${req.headers.host}${req.url}`)
// })

app.use(cors());

app.use('/api', router);

app.get("/", (req, res) =>{
    res.send("welcome to my app");
});

app.listen(PORT, ()=> {
    console.log(`App started successfully on http://localhost:${PORT}`)
})

// const httpsServer = https.createServer(credentials, app)

// httpsServer.listen(PORT, () => {
//     console.log(`App stated successfully on https://localhost:${PORT}`)
// })

// const httpApp = express();
// httpApp.use((req, res, next) =>{
//     res.redirect(`https://${req.headers.host}${req.url}`)
// })

// const httpServer = http.createServer(httpApp)

// httpServer.listen(8080, ()=>{
//     console.log(`Server HTTP en cours d\'exécution sur le port 80 et redirgé vers HTTPS `)
// })

