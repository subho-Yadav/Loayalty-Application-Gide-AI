const pool=require('./mariaDbPool')


async function mariadbConnection() {
  let conn;
  try {

	conn = await pool.getConnection();
    console.log('Maria DB Connected!')
  } finally {
	if (conn) conn.end(); 
  }
}

module.exports=mariadbConnection