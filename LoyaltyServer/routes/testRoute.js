const express=require('express')
const router=express.Router()

const testController=require('../controllers/test')

router.route('/test/users').get(testController)

module.exports=router