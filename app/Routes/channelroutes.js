const channelcontroller=require('../controllers/channelcontroller');
const channelrouter=require('express').Router();
const {authenticateToken}=require('../controllers/authnitication');

channelrouter.post('/addchannel',authenticateToken,channelcontroller.addchannel);
channelrouter.get('/:id',authenticateToken,channelcontroller.getchannel);
channelrouter.post('/sendmsg',channelcontroller.sendmsg);
//channelrouter.get('/userchannel',channelcontroller.userchannel);
channelrouter.post('/joinchannel',authenticateToken,channelcontroller.joinchannel);


module.exports=channelrouter;