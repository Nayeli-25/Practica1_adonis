'use strict'
/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

class CheckEdad {
  /**
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Function} next
   */
  async handle ({ request, response }, next) {
    const datos = await request.all()
    if (datos.Edad < 16 || datos.Edad > 50){
      return response.status(401).send('¡Edad no permitida!')
    }
    await next()
  }
}

module.exports = CheckEdad
