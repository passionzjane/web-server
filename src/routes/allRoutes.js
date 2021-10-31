const express = require('express')
const {showdata, helpdata, aboutdata, notfound, notexist} = require('../controllers/indexController')
const {fetchWeather, getProduct} = require('../controllers/weatherController')


const router = express.Router()

router.get('/', showdata)

router.get('/about', aboutdata)
    
router.get('/help', helpdata)

router.get('/weather', fetchWeather)

router.get('*', notfound)

router.get('/help/*', notexist)

router.get('/products', getProduct)

module.exports = router