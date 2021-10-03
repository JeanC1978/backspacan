'use strict'

const route = require('express').Router()
const { getDogs, getOneDogs, addDog, editDog, deleteDog} = require('../controllers/dogs.controller')

route.route('/').get(getDogs)

route.route('/api').get(getOneDogs)

route.route('/').post(addDog)

route.route('/api').put(editDog)

route.route('/:id').delete(deleteDog)


module.exports = route