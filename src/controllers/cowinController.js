let axios = require("axios")


let getStates = async function (req, res) {

    try {
        let options = {
            method: 'get',
            url: 'https://cdn-api.co-vin.in/api/v2/admin/location/states'
        }
        let result = await axios(options);
        console.log(result)
        let data = result.data
        res.status(200).send({ msg: data, status: true })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}


let getDistricts = async function (req, res) {
    try {
        let id = req.params.stateId
        let options = {
            method: "get",
            url: `https://cdn-api.co-vin.in/api/v2/admin/location/districts/${id}`
        }
        let result = await axios(options);
        console.log(result)
        let data = result.data
        res.status(200).send({ msg: data, status: true })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

let getByPin = async function (req, res) {
    try {
        let pin = req.query.pincode
        let date = req.query.date
        console.log(`query params are: ${pin} ${date}`)
        var options = {
            method: "get",
            url: `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode=${pin}&date=${date}`
        }
        let result = await axios(options)
        console.log(result.data)
        res.status(200).send({ msg: result.data })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

let getOtp = async function (req, res) {
    try {
        let blahhh = req.body

        console.log(`body is : ${blahhh} `)
        var options = {
            method: "post",
            url: `https://cdn-api.co-vin.in/api/v2/auth/public/generateOTP`,
            data: blahhh
        }

        let result = await axios(options)
        console.log(result.data)
        res.status(200).send({ msg: result.data })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

let getByDistrict = async function (req, res) {
    try {
        let dId = req.query.district_id
        let date = req.query.date
        console.log(`body is : ${dId} ${date}`);
        let options = {
            method: "get",
            url: `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?district_id=${dId}&date=${date}`
        }

        let result = await axios(options)
        console.log(result.data);
        res.status(200).send({ msg: result.data })
    } catch (error) {
        console.log(error);
        res.status(500).send({ msg: error.message })
    }
}

let shortedTem = async function (req, res) {

    let city = ["Bengaluru", "Mumbai", "Delhi", "Kolkata", "Chennai", "London", "Moscow"]
    let cityAtemp = []
    for (i = 0; i < city.length; i++) {
        let Obj = { city: city[i] }
        let serverAdd = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city[i]}&appid=c5a07a5f1ba8b10f0e5cb28b018f097a`)
        console.log(serverAdd.data.main.temp);
        Obj.temp = serverAdd.data.main.temp // adding new key- value pair to Obj 
        cityAtemp.push(Obj)
    }
    let shorted = cityAtemp.sort((a, b) => (a.temp - b.temp))
    console.log(shorted);
    res.status(200).send({ status: true, msg: shorted })
}

let meme = async function (req, res) {
    try {
        let template_id = req.query.template_id
        let text0 = req.query.text0
        let text1 = req.query.text1
        let username = req.query.username
        let password = req.query.password

        console.log(`body is ${text0} ${text1}`);

        let options = {
            method: "post",
            url: `https://api.imgflip.com/caption_image?template_id=${template_id}&text0=${text0}&text1=${text1}&username=${username}&password=${password}`
        }
        let result = await axios(options)
        console.log(result.data);
        res.status(200).send({ msg: result.data })


    } catch (error) {
        console.log(error);
        res.status(500).send({ msg: error.message })
    }


}

module.exports.getStates = getStates
module.exports.getDistricts = getDistricts
module.exports.getByPin = getByPin
module.exports.getOtp = getOtp
module.exports.getByDistrict = getByDistrict
module.exports.shortedTem = shortedTem
module.exports.meme = meme