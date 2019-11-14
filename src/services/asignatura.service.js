'use strict'
const mongoose=require('mongoose');
const Anuncio= require('../api/models/asignatura');


module.exports={
    async getAllAsignatures(){

        const asignatures = await Anuncio.find();
        return asignatures;

    },
    async getAsignatureById(id){

        const asignature = await Anuncio.findById(id);
        return asignature;
    },
    async postAsignatura(asignaturareq) {
      const asignaturaAlmacenado = await asignaturareq.save();
 
      return asignaturaAlmacenado;
    },

} 