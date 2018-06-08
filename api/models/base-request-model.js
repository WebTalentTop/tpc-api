/**
 * @swagger
 * definitions:
 *   BaseRequest:
 *     type: object
 *     required:
 *       - ClientIdentifier
 *       - TransactionID
 *       - RequestType
 *       - RequestDateTime
 *       - User
 *       - Password
 *       - requestMessage
 *     properties:
 *       ClientIdentifier:
 *         type: string
 *       TransactionID:
 *         type: string
 *       RequestType:
 *         type: string
 *       RequestDateTime:
 *         type: string
 *         format: date-time
 *       User:
 *         type: string
 *       Password:
 *         type: string
 *       requestMessage:
 *         type: object
 */

