const mariaDbPool=require('../mariaDB/mariaDbPool')

const getTop3Users=async (request,response)=>{
    try{
        const query=`SELECT user_name,user_id , SUM(loyalty_points) as total_loyalty_ponts
FROM userLoyalty
GROUP BY user_id
ORDER BY  total_loyalty_ponts DESC
LIMIT 3`
        const conn=await mariaDbPool.getConnection()
       const data=await  conn.query(query)
    //    console.log(data)
    response.status(200).json({status:true,topUsers:data})
    }catch(error){
        console.log(error)
    }
}

module.exports=getTop3Users