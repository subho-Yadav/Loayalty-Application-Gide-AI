
const mariaDBPool=require('../mariaDB/mariaDbPool')
const  moment=require('moment')
const getDistinctDates= async (request,response)=>{
    const query=`
    SELECT DISTINCT date
    FROM userLoyalty 
    WHERE date != 'date'
    `
    try{
        const conn=await mariaDBPool.getConnection()
        const data=await conn.query(query)
        let dates=data.map(({date})=>{
            date=new Date(date)
            // return moment(date).format("Do MMM YY")
            return date
        })
     response.status(200).json({status:true,dates})
    }catch(error){
        console.log(error)
    }
}

module.exports=getDistinctDates