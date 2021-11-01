
 
// const forecast = (latitude, longitude, callback) => {
//     const url = 'http://api.weatherstack.com/current?access_key=48009b8d6cc36fb3acaf5550a846ed68&query=Lagos&units=f'

//     require({url: url, json: true}, (error, response) => {  
//         if (error) {
//             callback('Unable to connect to weather service!')
//         } else if (response.body.error) {
//             callback('Unable to find location')
//         } else {
//             callback(`${response.body.current.weather_descriptions[0]}.It is currently ${response.body.current.temperature} degreess out. It feels like ${response.body.current.feelslike} degrees out`)
//         }
//     })  
// }
// module.exports = forecast


const request = require('request')

const forecast = (latitude, longitude, callback) => {


    
    const url = `http://api.weatherstack.com/current?access_key=48009b8d6cc36fb3acaf5550a846ed68&query=${latitude}${','}${longitude}&units=f`

    
    request({url, json: true}, (error, {body}) => {
         

        if (error) {
          
            callback('Unable to connect to weather services!')
        } else if (body.error ) {

            callback('Unable to find location')
        } else { 
            callback(undefined, `${body.current.weather_descriptions[0]}.It is currently ${body.current.temperature} degreess out. It feels like ${body.current.feelslike} degrees out,.  With a humidity of ${body.current.humidity}%`)
    } 
    })
}

module.exports = forecast