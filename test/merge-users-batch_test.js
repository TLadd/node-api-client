/*
 This file is auto-generated, do not edit
*/

'use strict'
var chai = require('chai').assert;
var recombee = require('./../index.js');
var rqs = recombee.requests;

var env = require('./set-environment.js');

describe('MergeUsers', function(){
  this.timeout(150000);

  before(function(done){

    env.setEnvironment()
    .then(()=> {
      done();
     });
  });
  it ('works in batch', (done) => {
    let requests = [
      new rqs.AddUser('target'),
      new rqs.MergeUsers('target','entity_id'),
      new rqs.MergeUsers('nonex_id','entity_id')
    ];

    env.client.send(new rqs.Batch(requests))
    .then((responses) => {
      chai.equal(responses[0].code, 201);
      chai.equal(responses[1].code, 200);
      chai.equal(responses[2].code, 404);
      done();
    });
  });
});