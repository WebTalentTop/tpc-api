import * as Swagger from './swagger'

const express = require('express')
const router = express.Router()

/**
 * @swagger
 * /service/base:
 *   post:
 *     description: Create a new request
 *     tags:
 *       - service
 *     produces:
 *       - application/json
 *       - application/xml
 *       - application/text
 *     parameters:
 *       - name: request
 *         description: Request object
 *         in: body
 *         required: true
 *         schema:
 *           $ref: '#/definitions/BaseRequest'   
 *     responses:
 *       200:
 *         description: response
 *         schema:
 *           $ref: '#/definitions/BaseResponse'
 */
router.post('/base/', (req, res, next) => {
  Swagger.validateModel('BaseRequest', req.body)

  const jwt = require('jsonwebtoken');
  const token = jwt.sign({ user: req.body.user }, 'secret');
  const response = {
    TransactionID: req.body.TransactionID,
    RequestType: req.body.RequestType,
    ResponseCode: "00000",
    responseMessage: { token: token },
  }
  Swagger.validateModel('BaseResponse', response)
  res.send(response)
})

module.exports = router
