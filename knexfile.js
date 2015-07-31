// Update with your config settings.

module.exports = {

  development: {
    client: 'postgresql',
    connection: {
      adapter : 'postgresql',
      encoding : 'unicode',
      pool : '5',
      database : 'rjct_development'
    }
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }
};
