const mariadb = require('mariadb');
const pool = mariadb.createPool({host: '127.0.0.1', user: 'subhoy',password:'aman1234$',database:'socialApp'});

module.exports=pool