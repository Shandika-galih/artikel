const {Router, query} = require('express')
const m$artikel = require('../modules/artikel.modules')
const response = require('../helpers/response')

const artikelController = Router()


/**
 * list User
 * @param {string} nama_user
 * @param {string} email
 */
artikelController.get('/', async (req, res, next) => {
    const list = await m$artikel.listUser()

    response.sendResponse(res, list)
})

/**
 * add User
 * @param {string} nama_user
 * @param {string} email
 */
artikelController.post('/', async (req, res, next) => {
    const addusr = await m$artikel.addUser(req.body)

    response.sendResponse(res, addusr)
})


/**
 * add Artikel
 * @param {string} artikel
 */
artikelController.post('/artikel', async (req, res, next) => {
    const add = await m$artikel.addArtikel(req.body)
    response.sendResponse(res, add)
})

/**
 * add Komentar
 * @param {string} komentar
 */
artikelController.post('/komentar', async (req, res, next) => {
    const add = await m$artikel.addKomentar(req.body)
    response.sendResponse(res, add)
})

/**
 * Edit Artikel
 * @param {number} id
 * @param {string} artikelnya
 */
artikelController.put('/edit', async (req, res, next) => {
    const edit = await m$artikel.editArtikel(req.body)
    response.sendResponse(res, edit)
})

/**
 * Delete Todo
 * @param {number} id
 */
artikelController.delete('/:id', async (req, res, next) => {
    const del = await m$artikel.deleteArtikel(req.params.id)
    response.sendResponse(res, del)
})


module.exports = artikelController