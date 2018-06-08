const express = require('express')
const router = express.Router()

const options = {
  swaggerDefinition: {
    info: {
      title: 'TPC - The Payment Connection',
      version: '1.0.0',
      description: 'Interface API with Swagger doc',
    },
    tags: [
      {
        name: 'service',
        description: 'Service API'
      },
      {
        name: 'stocks',
        description: 'Stocks API (Testing)'
      },
    ],
    schemes: ['http'],
    host: 'localhost:3000',
    basePath: '/api'
  },
  apis: [
    './api/controllers/stocks.js',
    './api/models/stock-model.js',
    './api/controllers/service.js',
    './api/models/base-request-model.js',
    './api/models/base-response-model.js',
  ]
}

const swaggerJSDoc = require('swagger-jsdoc')
const swaggerUi = require('swagger-ui-express')
const swaggerSpec = swaggerJSDoc(options)
require('swagger-model-validator')(swaggerSpec)

router.get('/json', function (req, res) {
  res.setHeader('Content-Type', 'application/json')
  res.send(swaggerSpec)
})

router.use('/', swaggerUi.serve, swaggerUi.setup(swaggerSpec))

function validateModel (name, model) {
  const responseValidation = swaggerSpec.validateModel(name, model, false, true)
  if (!responseValidation.valid) {
    console.error(responseValidation.errors)
    throw new Error(`Model doesn't match Swagger contract`)
  }
}

module.exports = {
  router,
  validateModel
}
