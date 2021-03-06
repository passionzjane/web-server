const path = require('path')
const express = require('express')
const hbs = require('hbs')
const allRouter = require('./routes/allRoutes')



const app = express()
const port = process.env.PORT || 3000

// Define paths for express config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

// Set up handlebars engine and view location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

//Set up static directory to serve
app.use(express.static(publicDirectoryPath))


//routing
app.use('/', allRouter);


app.listen(port, () => {
    console.log('Server is up on port.' + port)
})