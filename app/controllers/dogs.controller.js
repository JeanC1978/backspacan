'use strict'

const dataModels = require('../models/dogs.model')
const connection = require('../../config/connection')

async function getDogs(req, res) {
    console.log(`datos: Entro a getdogs`)
    dataModels.getDogs((data, error) => {
        // 404 500
        res.json(data)
    })
}

function getOneDogs(req, res) {
    console.log(`datos: , entro a getonedogs}`,req)
    const raza= req.query.raza
    const tamano = req.query.tamano
    console.log(`datos: , ${raza}, ${tamano}`)
    dataModels.getOneDogs({raza,tamano}, (data, error) => {
        res.json(data)
    }
    )
}

function addDog (req, res) {

    const {raza} =  req.body
    console.log(`raza : ${raza}`)
    dataModels.addDog({raza}, (data, error) => {
        res.json(data)
    })
}

function editDog(req, res) {
    const raza= req.query.raza
    const tamano = req.query.tamano
    /*const { id } = req.params*/
    const { imagen } = req.body
    dataModels.editDog({raza, tamano, imagen}, (data, error) => {
        res.json(data)
    })
}

function deleteDog(req, res) {
    const { id } = req.params
    dataModels.deleteDog(id, (data, error) => {
        res.json(data)
    })

}
module.exports = {
    getDogs,
    getOneDogs,
    addDog,
    editDog,
    deleteDog
}