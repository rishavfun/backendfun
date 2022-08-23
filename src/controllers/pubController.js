const { request } = require("express");

const publisherModel= require("../models/publisherModel")

const createPublisher= async function (req, res) {
    let Publisher = req.body
    let PublisherCreated = await publisherModel.create(Publisher)
    res.send({data: PublisherCreated})
}






module.exports.createPublisher= createPublisher