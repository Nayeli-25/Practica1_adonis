'use strict'

/** @typedef {import ('@adonisjs/framework/src/Request')} Request */
/** @typedef {import ('@adonisjs/framework/src/Response')} Response */

const { validate } = use('Validator')
const Atleta = use('App/Models/Atleta')
const rules = {
  Nombre: 'required',
  Apellido: 'required',
  Deporte: 'required',
  Edad: 'integer'
}

class AtletaController {

    async createAtleta ({request, response}) {
      const validation = await validate(request.all(), rules)
          if (validation.fails()) 
            return response.status(400).send ({Error: 'Datos faltantes, no se realizó el registro', Causa: validation.messages()})
      
          const info = request.body
          const atleta = await Atleta.create(info)
          return { 'Atleta añadido': atleta.toJSON()}
    }

    async getAtletas ({params}) {
        if (params.id){
            const atleta = await Atleta.find(params.id)
            return { Atleta: atleta.toJSON()}
        }
        const atletas = await Atleta.all()
        return { Atletas: atletas.toJSON()}
    }

    async updateAtleta ({params, request, response}){
      const atleta = await Atleta.find(params.id)
      const validation = await validate(request.all(), rules)
        
      if (validation.fails()) 
            return response.status(400).send ({Error: 'Datos faltantes, no se actualizó la información', Causa: validation.messages()})

      atleta.Nombre = request.input('Nombre')
      atleta.Apellido = request.input('Apellido')
      atleta.Edad = request.input('Edad')
      atleta.País_Origen = request.input('Pais') 
      atleta.Deporte = request.input('Deporte')
      
      if (await atleta.save())
          return { 'Datos actualizados': atleta.toJSON()}

      return response.status(400).send('No se actualizó la información')
    }

    async deleteAtleta ({params, response}) {
      const atleta = await Atleta.find(params.id)
      if (await atleta.delete())
        return { 'Atleta eliminado': atleta.toJSON()}
      return response.status(400).send('No se eliminó la información')
  }
}

module.exports = AtletaController
