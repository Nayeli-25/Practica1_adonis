'use strict'

const AtletaController = require('../app/Controllers/Http/AtletaController')

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/', () => {
  return { greeting: 'Hello world in JSON' }
})

Route.get('atletas/:id?', 'AtletaController.getAtletas')
Route.post('create', 'AtletaController.createAtleta').middleware('checkedad')
Route.put('update/:id', 'AtletaController.updateAtleta').middleware('checkedad')
Route.delete('delete/:id', 'AtletaController.deleteAtleta')
