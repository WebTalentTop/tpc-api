var expect = require('chai').expect;
var chai = require('chai'), chaiHttp = require('chai-http');
var app = require('../app.js');

chai.use(chaiHttp);


describe('Request', function() {
  it('The response should have required response properties', function(done) {
    chai.request('http://localhost:3000/api/service/base')
    .post('/')
    .send({
      ClientIdentifier: "10000",
      TransactionID: "11111",
      RequestType: "000",
      RequestDateTime: "2018-06-10T12:47:19.037Z",
      User: "User",
      Password: "Password",
      requestMessage: {},
    })
    .end(function(err, res) {
      expect(res).to.have.status(200);
      expect(res.body).to.have.property("TransactionID");
      expect(res.body).to.have.property("RequestType");
      expect(res.body).to.have.property("ResponseCode");
      expect(res.body).to.have.property("responseMessage");
      expect(res.body.TransactionID).to.equal("11111");
      done();                               // <= Call done to signal callback end
    });
  });

});