'use strict';

/***
 * Export the given production environment configuration
 * @type {{production: boolean; endpoint: string; v1: {products: {uri: string}}}}
 */
export const environment = {
  production: true,
  endpoint: 'http://localhost:8080',
  v1: {
    products: {
      uri: '/api/v1/products'
    }
  }
};
