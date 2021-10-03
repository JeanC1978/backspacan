'use strict'

const connection = require('../../config/connection')

var dataModels = {
    getDogs : (callback) => {
        if(connection) {
            let sql = `select * from dogs`

            connection.query(sql, (error, rows) => {
                if(error) throw error
                callback(rows)
            })
        }
    },
    getOneDogs : (data, callback) => {
        console.log(`datos: , ${connection.escape(data.raza)},${connection.escape(data.tamano)}`)
        if(connection) {
            let sql = `select d.imagen from dogs as d
            inner join raza as r on r.id=d.idraza
            inner join tamano as t on t.id=d.idtamano
            where r.raza=${connection.escape(data.raza)} and t.tamano=${connection.escape(data.tamano)}`
console.log(sql)
            connection.query(sql, (error, rows) => {
                if(error) throw error
                callback(rows)
            })
        }
    },
    addDog : (data, callback) => {

        if(connection) {
            let sql = `insert into raza(raza,fecha) values (${connection.escape(data.raza)}, NOW())`

            connection.query(sql, (error, rows) => {
                if(error) throw error
                callback({message : 'raza insertada'})
            })
        }
    },
    editDog : (data, callback) => {
        if(connection) {
            let sql = `update dogs as d
            inner join raza as r on r.id=d.idraza
            inner join tamano as t on t.id=d.idtamano
            set d.imagen=${connection.escape(data.imagen)}
            where r.raza=${connection.escape(data.raza)} and t.tamano=${connection.escape(data.tamano)};`
            connection.query(sql, (error, rows) => {
                if(error) throw error
                callback({message: 'dog actualizado'})
            })
        }
    },
    deleteDog : (data, callback) => {
        if(connection) {
            let sql = `delete from dogs where id = ${connection.escape(data)}`

            connection.query(sql, (error, rows) => {
                if(error) throw error
                callback({message: 'dog eliminado'})
            })
        }
    }
}

module.exports = dataModels
