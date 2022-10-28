const channelcontroller=require('../controllers/channelcontroller');
const channelrouter=require('express').Router();
const {authenticateToken}=require('../controllers/authnitication');

channelrouter.post('/addchannel',authenticateToken,channelcontroller.addchannel);
channelrouter.get('/:id',authenticateToken,channelcontroller.getchannel);
channelrouter.post('/sendmsg',channelcontroller.sendmsg);

channelrouter.post('/joinchannel',authenticateToken,channelcontroller.joinchannel);
channelrouter.post('/getusers',channelcontroller.getusersofchannel);


module.exports=channelrouter;