const express = require('express')
const response = require('./helpers/response')
const routes = require('./routes')
const app = express()
const cors = require('body-parser')

const port = process.env.PORT || 5011

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.get('/', async (req, res, next) => {
    res.status(200).send({
        message:"Artikel"
    })
})

//routes
routes(app)

//cors
app.use(cors())
app.use(cors.urlencoded({ extended: false }))
app.use(cors.json())
app.use('/api/artikel', routes); 


//App listen
app.listen(port, () => {
    console.log(`server connected to port ${port}`)
})

