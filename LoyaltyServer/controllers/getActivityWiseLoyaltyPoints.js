const mariaDbPool=require('../mariaDB/mariaDbPool')
const moment=require('moment')

const getActivityWiseLoyaltyPoints=async (request,response)=>{

    try{
        let query
        const queryParams=request.query
        let {name,date}=queryParams
        console.log(name,date)
        if(!isNaN( Date. parse(date))){
        date=moment(date).format("YYYY-MM-DD")
        

//date between '2023-03-01' and '2023-04-30'
        query= `
        SELECT  user_name,module_action as activity,SUM(loyalty_points) as total_loyalty_ponts
FROM userLoyalty
WHERE user_name="${name}" and date='${date}' 
GROUP BY category,user_name
ORDER BY  total_loyalty_ponts DESC
        `
        }else{
             query= `
        SELECT  user_name,module_action as activity,SUM(loyalty_points) as total_loyalty_ponts
FROM userLoyalty
WHERE user_name="${name}"  
GROUP BY category,user_name
ORDER BY  total_loyalty_ponts DESC
        `
        }
        let conn=await mariaDbPool.getConnection() //
        const data=await conn.query(query)
        response.status(200).json({status:true,data})
    }catch(error){
        console.log(error)
    }
}

module.exports= getActivityWiseLoyaltyPoints