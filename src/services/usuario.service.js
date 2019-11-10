'use strict'
const mongoose=require('mongoose');
const Usuario= require('../api/models/usuario');


module.exports={
    async getAllUsuarios(){

        const usuarios = await Usuario.find();
        return usuarios;

    },
    async getUsuarioById(id){

        const usuario = await Usuario.findById(id);
        return usuario;
    }
} 