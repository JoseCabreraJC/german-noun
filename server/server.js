// Require the framework and instantiate it
const fastify = require('fastify')({ logger: true })
const main  = require ('./../main.js')
// console.log(main.randomNoun());
// Declare a route

fastify.register(require('fastify-cors'), {
  // Here i should add something to keep bad peps from consuming this
})

fastify.get('/', async (request, reply) => {
  let noun =  main.randomNoun()
  console.log(noun);
  return noun
})

// Run the server!
const start = async () => {
  try {
    await fastify.listen(3000)
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start()