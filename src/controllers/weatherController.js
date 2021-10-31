const geocode = require('../utils/geocode')
const forcast = require('../utils/forecast')

const fetchWeather = (req, res) => {
    if (!req.query.address) {
        return res.send({
            error: 'You must provide an address!'
        })
    }

    //const {address} = req.query
   
    
    geocode(req.query.address, (error, {latitude, longitude, location} = {}) => {

          

        if (error) {
            return res.send({ error })
        }

       

        forcast(latitude, longitude, (error, forecastData) => {
            if (error) {
                return res.send({error})
            }
            res.send({
                forcast: forecastData,
                location,
                address: req.query.address
            })
        })
    })

}

const getProduct = (req, res) => {
    if(!req.query.search) {
        return res.send({
            error: 'You must provide a search term'
        })
    }
    console.log(req.query.search)
    res.send({
        products: []
    })
}

module.exports = {fetchWeather, getProduct}