const express=require('express')
const router=express.Router()
const authenticate=require('../middleware/auth');
const groupmessageController=require('../controller/groupmessage')


router.post(`/groupmessage/:id`,authenticate.authenticate,groupmessageController.getmessages)
router.get('/gropumessages/:id',authenticate.authenticate,groupmessageController.getgroupmessages)
router.get('/getmembers/:id',authenticate.authenticate,groupmessageController.getgroupmembers)
router.post('/addparticipants/:id',authenticate.authenticate,groupmessageController.addparticipants)

module.exports=router;
