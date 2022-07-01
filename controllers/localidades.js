const Localidad = require('../models/Localidad');


// @desc Get all Localidades/
// @route GET /api/v1/localidades
// @access Public

exports.getLocalidades = async (req, res, next) => {
    try {
        const localidades = await Localidad.find();

        return res.status(200).json({
            success: true,
            count: localidades.length,
            data: localidades
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            error: 'Server Error'
        });
    }
};

// @desc create a localidad
// @route POST /api/v1/localidades
// @access Public

exports.addLocalidad = async (req, res, next) => {
    try {
        const localidad = await Localidad.create(req.body);
        return res.status(201).json({
            success: true,
            data: localidad 
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ 
            error: 'Server Error'
        });
    }
};

// @desc GET a localidad
// @route GET /api/v1/localidades/:id
// @access Public

exports.getLocalidad = async (req, res, next) => {
    try {
        //we recieve a param called id from the url
        //the id is the same as cod_postal in the database
        //we need to find the localidad with the cod_postal matching the id in the url
        //we need to return only the nombre field of the localidad founded
        // const found = ;
        
        //if we don't find a localidad with the id in the url
        //we return a 404 error

        const localidad = await Localidad.findOne({ cod_postal: req.params.id });
        if (!localidad) {
            return res.status(404).json({
                success: false,
                error: 'Localidad not found'
            });
        }
        return res.status(200).json({
            success: true,
            id: localidad._id,
            cod_postal: localidad.cod_postal,
            nombre: localidad.nombre
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ 
            error: 'Server Error'
        });
    }
};