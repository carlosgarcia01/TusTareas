'use strict'
const mongoose=require('mongoose');
const TipoAsignatura= require('../api/models/tipo_asignatura');


module.exports={
    async getAllTipoAsignaturas(){

        const tipo_asignaturas = await TipoAsignatura.find();
        return tipo_asignaturas;

    },
    async getTipoAsignaturaById(id){

        const tipo_asignatura = await TipoAsignatura.findById(id);
        return tipo_asignatura;
    },

    async postTipoAsignatura(asignaturareq) {
      const asignaturaAlmacenado = await asignaturareq.save();
 
      return asignaturaAlmacenado;
    },


    


} 