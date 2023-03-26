const express=require('express')
const getActivityWiseLoyaltyPoints = require('../controllers/getActivityWiseLoyaltyPoints')
const getDistinctDates = require('../controllers/getDistinctDates')
const router=express.Router()

const getTop3Users=require('../controllers/getTop3Users')


router.route('/get/users/top3').get(getTop3Users)
router.route('/get/points/user').get(getActivityWiseLoyaltyPoints)
router.route('/get/date').get(getDistinctDates)
module.exports=router