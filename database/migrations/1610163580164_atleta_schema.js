'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CiudadSchema extends Schema {
  up () {
    this.create('atletas', (table) => {
      table.increments()
      table.string('Nombre', 30).notNullable()
      table.string('Apellido', 30).notNullable()
      table.integer('Edad', 2).notNullable()
      table.string('País_Origen', 20).notNullable()
      table.string('Deporte', 20).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('atletas')
  }
}

module.exports = CiudadSchema
