import express from 'express'
import { connect } from 'mongoose'
import { taskRouter } from './infrastructure/routers/task.router.js'
import { subTaskRouter } from './infrastructure/routers/subtask.router.js'
import 'dotenv/config.js'

const PORT = process.env.PORT || 3001
const DB_URL = process.env.DATABASE_URL

const app = express()

app.use('/api/task', taskRouter)
app.use('/api/subtask', subTaskRouter)

await connect(DB_URL)

app.listen(PORT, () => console.log(`Server has been started on ${PORT}`))
