const mariaDBPool=require('../mariaDB/mariaDbPool')
const getUsers=async (_,res)=>{
    try{
    let connection=await mariaDBPool.getConnection()
    let rows=await connection.query('SELECT * FROM userLoyalty')
    res.json({status:true,users:rows})
    }catch(error){
        console.log(error)
    }
}
module.exports=getUsers