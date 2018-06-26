var mongoose = require ("mongoose");



var armaSchema = mongoose.Schema({
    descripcion: { type: String, required: true},
    fuerza: { type: Number, required: true},
    categoria: {type: String},
    municiones: { type: Boolean}
   
});

var donothing = () =>{

}

    var armas = mongoose.model("arma",armaSchema);
    module.exports = armas;