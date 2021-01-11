'use strict'

/*
|--------------------------------------------------------------------------
| Factory
|--------------------------------------------------------------------------
|
| Factories are used to define blueprints for database tables or Lucid
| models. Later you can use these blueprints to seed your database
| with dummy data.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
// const Factory = use('Factory')

// Factory.blueprint('App/Models/User', (faker) => {
//   return {
//     username: faker.username()
//   }
// })
const Factory = use('Factory')

Factory.blueprint('App/Models/Atleta', async (faker) => {
  return {
    Nombre: faker.first(),
    Apellido: faker.last(),
    Edad: faker.age(),
    País_Origen: faker.country(), 
    Deporte: faker.name(),
    created_at: faker.date(),
    updated_at: faker.date()
  }
})