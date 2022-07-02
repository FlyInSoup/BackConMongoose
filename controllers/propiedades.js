const Propiedad = require('../models/Propiedad');

// @desc Get all Propiedad/
// @route GET /api/v1/propiedades
// @access Public

exports.getPropiedades = async (req, res, next) => {
    try {
        const propiedades = await Propiedad.find();

        return res.status(200).json({
            success: true,
            count: propiedades.length,
            data: propiedades
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            error: 'Server Error'
        });
    }
};

// @desc create a Propiedad
// @route POST /api/v1/propiedades
// @access Public

exports.addPropiedad = async (req, res, next) => {
    try {
        const propiedades = await Propiedad.create(req.body);
        return res.status(201).json({
            success: true,
            data: propiedades 
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ 
            error: 'Server Error'
        });
    }
};

// // @desc GET a localidad
// // @route GET /api/v1/localidades/:id
// // @access Public

// exports.getLocalidad = async (req, res, next) => {
//     try {
//         const localidad = await Localidad.findOne({ cod_postal: req.params.id });
//         if (!localidad) {
//             return res.status(404).json({
//                 success: false,
//                 error: 'Localidad not found'
//             });
//         }
//         return res.status(200).json({
//             success: true,
//             id: localidad._id,
//             cod_postal: localidad.cod_postal,
//             nombre: localidad.nombre
//         });
//     } catch (error) {
//         console.error(error);
//         return res.status(500).json({ 
//             error: 'Server Error'
//         });
//     }
// };