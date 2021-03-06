/**
 * RE_USERS.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  attributes: {
    reEmail: {
      type: 'string',
      required: true
    },
    rePassword: {
      type: 'string',
      required: true
    },
  },
};
