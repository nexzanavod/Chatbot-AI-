'use strict'

const dialogFlow = require('dialogflow');
const structjsnon = require('./structjson');
const config = require('../config/keys');

const projectID = config.googleProjectID;

const credentials = {
  client_email: config.googleClientEmail,
  private_key : config.googlePrivateKey
};

const sessionClient = new dialogFlow.SessionsClient({projectID,credentials}); 

const sessionPath = sessionClient.sessionPath(
 config.googleProjectID,
 config.dialogFlowSessionID
 );



module.exports = {
  textQuery: async function(text,parameters = {}) {
   let self = module.exports;
     // The text query request.
  const request = {
   session: sessionPath,
   queryInput: {
     text: {
       // The query to send to the dialogflow agent
       text:text,
       // The language used by the client (en-US)
       languageCode: config.dialogFlowSessionLanguageCode,
     },
   },
   queryParams:{
    payload:{
     data:parameters
    }
   }
 };
   let responses = await sessionClient.detectIntent(request);
   responses = await self.handleAction(responses);
   return responses;
     
  },
  //Event Quary
  eventQuery: async function(event,parameters = {}) {
    let self = module.exports;
      // The text query request.
   const request = {
    session: sessionPath,
    queryInput: {
      event: {
        // The query to send to the dialogflow agent
        name:event,
        parameters:structjsnon.jsonToStructProto(parameters),
        // The language used by the client (en-US)
        languageCode: config.dialogFlowSessionLanguageCode,
      },
    },
    queryParams:{
     payload:{
      data:parameters
     }
    }
  };
    let responses = await sessionClient.detectIntent(request);
    responses = await self.handleAction(responses);
    return responses;
      
   },
  handleAction : function(responses){
   return responses;
  }
}