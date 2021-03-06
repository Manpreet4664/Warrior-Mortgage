/**
 * BrokerMortgage.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    userName:{
      type: 'string',
      required:true
    },
    password:{
      type: 'string',
      required:true
    },
    firstName : {
      type: 'string',
      required:true
    },
    lastName : {
      type: 'string',
      required:true
    },
    currentAddress:{
      type:"string",
      required:true
    },
    currentEmployerName:{
      type: 'string',
      required:true
    },
    phone : {
      type: 'number',
      required:true
    },
    employeeEmail:{
      type: 'string',
      required:true
    },
    mortgageAmount: {
      type: 'number',
      required: true
    },
    mlsId:{
      type: 'string',
      required: true
    },
    mortId:{
      type: 'string'
    },
    mortgageStatus: {
      type: 'string'
    },
    insuredValue:{
      type:"number"
    },
    deductibleValue:{
      type:"number"
    },
    insuranceStatus: {
      type: 'string'
    },
    salary: {
      type: 'string'
    },

    employed_date: {
      type: 'string'
    },
    
    employerConfirmationStatus: {
      type: 'string'
    },
    appraisalValue:{
      type:'number'
    },
    reAppraisalStatus: {
      type: 'string'
    },
  },

};

