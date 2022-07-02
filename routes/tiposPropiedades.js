const express = require('express');
const { getTipoPropiedad } = require('../controllers/tipoPropiedades');

const router = express.Router();

//solo tiene get porque van a estar cargados en la base de datos
router.route('/:id').get(getTipoPropiedad);

module.exports = router;