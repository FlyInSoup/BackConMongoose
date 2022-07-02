const mongoose = require('mongoose');

const ClienteSchema = new mongoose.Schema({
    cuit: {
        type: String,
        required: [true, 'Por favor ingrese un cuit'],
        unique: true,
        trim: true,
        maxlength: [11, 'cuit no puede tener mas de 11 caracteres'],
    },
    nombre_razon_social: {
        type: String,
        required: [true, 'Por favor ingrese un nombre'],
        trim: true,
        maxlength: [60, 'nombre no puede tener mas de 60 caracteres'],
    },
    celular: {
        type: String,
        trim: true,
        maxlength: [20, 'celular no puede tener mas de 20 caracteres'],
    },
    telefono: {
        type: String,
        trim: true,
        maxlength: [20, 'telefono no puede tener mas de 20 caracteres'],
    },
    email: {
        type: String,
        trim: true,
        maxlength: [50, 'email no puede tener mas de 50 caracteres'],
    },
    condicion_iva: {
        type: String,
        trim: true,
        maxlength: [20, 'condicion_iva no puede tener mas de 20 caracteres'],
    },
    domicilio: {
        type: mongoose.Types.ObjectId,
        ref: 'Domicilio',
        required: [true, 'Por favor ingrese un domicilio'],
    },
    propiedades: [{
        type: mongoose.Types.ObjectId,
        ref: 'Propiedad',
    }],
    contratos: [{
        type: mongoose.Types.ObjectId,
        ref: 'Contrato',
    }],
    pagos: [{
        type: mongoose.Types.ObjectId,
        ref: 'Pago',
    }],
    representante: {
        type: mongoose.Types.ObjectId,
        ref: 'Cliente',
    }
});

module.exports = mongoose.model('Cliente', ClienteSchema);