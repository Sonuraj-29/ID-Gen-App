const express = require('express')
const cors = require('cors')
const bodyparser = require('body-parser')

const port = 3000

// Routers
const registerRouter = require('./src/router/registerRouter')
const loginRouter = require('./src/router/loginRouter')
const applyRouter = require('./src/router/applyRouter')

const app = new express()
app.use(cors())
app.use(express.json())
app.use(bodyparser.urlencoded({extended : true}))

// Routes
app.use('/register', registerRouter)
app.use('/login', loginRouter)
app.use('/apply', applyRouter)

app.listen(port, ()=>{
    console.log('Listening on port '+ port)
})