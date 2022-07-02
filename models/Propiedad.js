const mongoose = require('mongoose');

const PropiedadSchema = new mongoose.Schema({
    cod_prop: {
        type: String,
        required: [true, 'Por favor ingrese un código de propiedad'],
        unique: true,
        trim: true,
        maxlength: [10, 'cod_prop no puede tener mas de 10 caracteres'],
    },
    descripcion: {
        type: String,
        trim: true,
        maxlength: [150, 'Name cannot be more than 150 characters'],
    },
    dimension: {
        type: float
    },
    tipo: {
        type: Schema.Types.ObjectId,
        ref: 'TipoPropiedad',
        required: [true, 'Por favor ingrese un tipo de propiedad'],
    },
    domicilio: {
        type: Schema.Types.ObjectId,
        ref: 'Domicilio',
        required: [true, 'Por favor ingrese un domicilio'],
    },
    propietario: {
        type: Schema.Types.ObjectId,
        ref: 'Cliente',
    },
    contrato: {
        type: Schema.Types.ObjectId,
        ref: 'Contrato',
    },
    estado: {
        type: Schema.Types.ObjectId,
        ref: 'Estado',
        required: [true, 'Por favor ingrese un estado'],
    },
});

module.exports = mongoose.model('Propiedad', PropiedadSchema);