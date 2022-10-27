const usercontroller=require('../controllers/usercontroller');
const userrouter=require('express').Router();
const {authenticateToken}=require('../controllers/authnitication');

userrouter.post('/adduser',usercontroller.addUser);
userrouter.get('/:id',usercontroller.getOneuser);
userrouter.post('/login',usercontroller.login);



module.exports=userrouter;