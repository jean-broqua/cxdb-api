import express from 'express'
import MongooseConnection from './mongoose'
const server = express()

MongooseConnection()

server.use(express.json())

server.get('/', (req, res) => {
  return res.send('hello')
})

// to-do: return and array with all the restaurants in the db
server.get('/list', (req, res) => {
  res.send()
})

// to-do: add a new review to the db
server.post('/restaurant', (req, res) => {
  res.send()
})

export default server
