const servercontroller=require('../controllers/servercontroller');
const serverrouter=require('express').Router();

serverrouter.post('/addserver',servercontroller.addserver);
serverrouter.get('/:id',servercontroller.getserver);

module.exports=serverrouter;