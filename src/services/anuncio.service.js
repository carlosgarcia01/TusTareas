 'use strict'
const mongoose=require('mongoose');
const Anuncio= require('../api/models/anuncio');


module.exports={
    async getAllAnuncios(){

        const anuncios = await Anuncio.find();
        return anuncios;

    },
    async getAnuncioById(id){

        const anuncio = await Anuncio.findById(id);
        return anuncio;
    }
} 