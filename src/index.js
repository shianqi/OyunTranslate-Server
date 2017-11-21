import Koa from 'koa'
import mongoose from 'mongoose'
import cors from 'koa2-cors'
import bodyParser from 'koa-bodyparser'

import initRouter from './modules'

const app = new Koa()

mongoose.Promise = Promise
// connect mongodb
mongoose.connect('mongodb://localhost:27017/oyunTranslate', { useMongoClient: true })
mongoose.connection.on('error', console.error)

app.use(cors())
app.use(bodyParser())
initRouter(app)

app.listen(4000)
