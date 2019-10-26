require('dotenv').config({ path: '.env' });

exports.default = {
  env: {
    EVENTBRITE_KEY: process.env.EVENTBRITE_KEY
  }
};
