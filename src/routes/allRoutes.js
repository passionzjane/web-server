const express = require('express')
const {showdata, helpdata, aboutdata} = require('../controllers/indexController')
const {fetchWeather} = require('../controllers/weatherController')


const router = express.Router()

router.get('/', showdata)

router.get('/about', aboutdata)
    
router.get('/help', helpdata)

router.get('/weather', fetchWeather)
  

module.exports = router