const express = require('express')
const cors=require('cors')

const MyErrorobj=require('./utils/MyErrorObject')

const testRouter=require('./routes/testRoute')
const applicationRouter=require('./routes/applicationRoutes')

const app=express()
app.use(cors({
    origin:'*'
}))
app.use('/',testRouter)
app.use('/',applicationRouter)
const mariadbConnection=require('./mariaDB/connection')

mariadbConnection()




app.listen(8080,()=>{
    console.log('Server running on port 8080')
})




