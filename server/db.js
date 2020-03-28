const Pool = require('pg').Pool

const pool = new Pool({
    user: 'mickey',
    password: 'mickey02',
    port: '5432',
    database: 'perntodo'
})

module.exports = pool