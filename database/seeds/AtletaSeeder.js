'use strict'

/*
|--------------------------------------------------------------------------
| CiudadSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const Database = use('Database')

class AtletaSeeder {
  async run () {
    await Factory.model('App/Models/Atleta').createMany(30)
  }
}

module.exports =  AtletaSeeder
