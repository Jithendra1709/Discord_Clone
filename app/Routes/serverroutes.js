const servercontroller=require('../controllers/servercontroller');
const serverrouter=require('express').Router();
const {authenticateToken}=require('../controllers/authnitication');

serverrouter.post('/createserver',authenticateToken,servercontroller.createserver);
serverrouter.get('/server/getnonprivatechannels/:id',authenticateToken,servercontroller.getnonprivatechannels);
serverrouter.get('/getallservers',authenticateToken,servercontroller.getallservers);
serverrouter.post('/joinserver/:id',authenticateToken,servercontroller.joinserver);

module.exports=serverrouter;