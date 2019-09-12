const Express = require('express')
const Coordinate = require('./coordinate')
const cors = require('cors')
const app = Express()

app.use(Express.json())
app.use(cors())

let locations = []

app.post('/save-location',(req,res) => {

    const latitude = req.body.lat
    const longitude = req.body.long

    let coordinate = new Coordinate(latitude, longitude)

    locations.push(coordinate)

    res.status(200).send()
})

app.get('/all-locations', (req, res) => {
    res.json(locations)
})



const PORT = 3001
app.listen(PORT, () => {
    console.log('Server is running')
})
