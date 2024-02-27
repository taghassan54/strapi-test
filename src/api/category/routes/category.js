'use strict';

/**
 * category router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::category.category',({strapi})=>{
  console.log("strapi_log", strapi)
});
