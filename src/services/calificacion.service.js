'use strict'
const mongoose=require('mongoose');
const Calificacion= require('../api/models/calificacion');


module.exports={
    async getAllCalificationes(){

        const calificaciones = await Calificacion.find();
        return calificaciones;

    },
    async getCalificacionById(id){

        const calificacion = await Calificacion.findById(id);
        return calificacion;
    },

    async postCalificacion(calificacionreq)
    {
        const calificacionAlmacenada= await calificacionreq.save();
        return calificacionAlmacenada;
    }
} 