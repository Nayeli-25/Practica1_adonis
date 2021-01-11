'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Atleta extends Model {
    static get table() {
        return 'atletas'
      }
    }

module.exports = Atleta
