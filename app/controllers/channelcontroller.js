const db=require('../models');
const Channel=db.channels;
const io = require('socket.io')(6000)
const {authenticateToken}=require('./authnitication');
const User=db.users;

//To addchannel by the user
const addchannel=async(req,res)=>{
    let info={
        name:req.body.name,
        channel_id:req.body.channel_id,
        message_id:req.body.message_id,
        thread_id:req.body.thread_id,
        share:req.body.share,
        notification:req.body.notification,
        user_id:req.userId,
    }
    try{
    const channel=await Channel.create(info);
    res.status(200).send(channel);
    }
    catch(err){ res.send(err.message)}
    
}

//To get all the channels that the user had created
const getchannel=async(req,res)=>{
    //let id=req.params.id;
    
    try{
    const channel=await Channel.findAll({where :{user_id:req.userId}});
    res.status(200).send(channel);
    // console.log(req.userId+"hello");
    }
    catch(err){res.send(err.message)}
}

const sendmsg=async(req,res)=>{
    let info={
        id:req.body.id,
       // name:req.body.name,
        message:req.body.message,
    }
    try{
        const channel=await Channel.findOne({where:{id:id}});
        io.on('connection', socket => {
            socket.on('new-user', name => {
            //  users[socket.id] = name
              socket.broadcast.emit('user-connected', name)
            })
            socket.on('send-chat-message', message => {
              socket.broadcast.emit('chat-message', { message: message, /*name: users[socket.id]*/ })
            })
            // socket.on('disconnect', () => {
            //   socket.broadcast.emit('user-disconnected', users[socket.id])
            //   delete users[socket.id]
            // })
          })
    }
    catch(err){res.send(err.message)}
}

const joinchannel=async(req,res)=>{
    let data={
        channelid:req.body.channelid,
    }
    try{
       // if(playlist.userId === userId) {
            const channel = await Channel.findByPk(req.body.id);
            if(channel){
                channelmembers = await channelmembers.addchannels([channel]);
                res.status(200).send('user added');
            }else{
                res.status(300).send('Something went wrong');
            }

    }
    catch(err){res.send(err.message);}
}





module.exports={
    addchannel,getchannel,sendmsg,joinchannel
}