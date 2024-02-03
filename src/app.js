import express from "express";
import logger from "morgan";

import appRouter from "./routes/index.js";
import { connectDB } from "./config/config.js";
import handlebars from 'express-handlebars';
import { __dirname } from "./utils.js";

const app = express();
const PORT = 8080;

connectDB()

app.use(express.json())
app.use(express.urlencoded({extends: true}))
app.use(logger('dev'))

app.engine('handlebars', handlebars.engine())
app.set('views', __dirname + '/views')
console.log(__dirname + '/views')

app.use(appRouter)

app.listen(PORT, (err) => {
    if(err) console.log(err)
    console.log(`Servidor escuchando en el puerto ${PORT}`)
});