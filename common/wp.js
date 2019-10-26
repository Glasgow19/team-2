const WP = require('wpapi');

const WP_URL = 'http://localhost:8000/';

export default new WP({ endpoint: `${WP_URL}?rest_route=/` });
