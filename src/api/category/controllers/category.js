'use strict';

/**
 * category controller
 */

const {createCoreController} = require('@strapi/strapi').factories;

module.exports = createCoreController('api::category.category',
  ({strapi}) => {

    console.log("strapi_log", strapi)

    return ({

      async create(ctx) {
        // some logic here
        const response = await super.create(ctx);
        // some more logic
        console.log("response", response)
        return response;
      }
    })
  }
);
