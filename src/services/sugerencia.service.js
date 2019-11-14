'use strict'
const mongoose=require('mongoose');
const Sugerencia= require('../api/models/sugerencia');


module.exports={
    async getAllSugerencias(){

        const sugerencias = await Sugerencia.find();
        return sugerencias;

    },
    async getSugerenciaById(id){

        const sugerencia = await Sugerencia.findById(id);
        return sugerencia;
    },
    async postSugerencia(sugerenciareq)
    {
        const sugerenciaAlmacenada= await sugerenciareq.save();
        return sugerenciaAlmacenada;
    }
} 