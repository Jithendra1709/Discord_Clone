// const { channelmembers, users } = require('../models');
const db=require('../models');
const Channel=db.channels;
const User=db.users;
const Channelmember=db.channelmember;
const Serverchannel=db.serverchannel;
const Serverchanneluser=db.serverchanneluser;

//To addchannel by the user
const addchannel=async(req,res)=>{
    let info={
        name:req.body.name,
        // channel_id:req.body.channel_id,
        // message_id:req.body.message_id,
        // thread_id:req.body.thread_id,
        // share:req.body.share,
        // notification:req.body.notification,
        type:req.body.type,
        serverId:req.body.serverId,
        created_by:req.userId,
        private_channel:req.body.private_channel,
    }
    try{
    const channel=await Channel.create(info);
    const addchannel=await Channelmember.create({
        userId:req.userId,
        channelId:channel.id,
    })
    if(!channel.private_channel){
    const serverchannel=await Serverchanneluser.create({
        userId:req.userId,
        serverId:channel.serverId,
        channelId:channel.id,
        private:false})
   // console.log(channel.id);
    res.status(200).send(channel);
    }
    else{
        const serverchannel=await Serverchanneluser.create({
            userId:req.userId,
            serverId:channel.serverId,
            channelId:channel.id,

            private:true})
        res.status(200).send(channel);
    }
}

    catch(err){ res.send(err.message)}
    
}



//To get all the channels that the user had created
const getchannel=async(req,res)=>{
    //let id=req.params.id;
    
    try{
    const channel=await Channel.findAll({where :{created_by:req.userId}});
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


//Join a channel by an user so that the junction table gets updated.
const joinchannel=async(req,res)=>{
    let id=req.params.id;
    try{
        // let channel=await Channel.findOne({where:{id:req.body.id,private_channel:false}});
        let channel=await Channel.findOne({where:{id:id}});

        // console.log(channel.name)
       if(channel) {
      let info={
        userId:req.userId,
        channelId:id,
      }
     
        const data=await Channelmember.create(info);
        const serverchannel=await Serverchanneluser.create({
            
            userId:req.userId,
            private:channel.private_channel,
            serverId:channel.serverId,
            channelId:id})

        
            res.status(200).json({channelmemeberdata:data,serverchanneldata:serverchannel});
          
    }
    else
    res.status(200).send("channel doesnt exist");
    }
    catch(err){res.send(err.message);}
}

//Get the number of users peresent in that channel 
const getusersofchannel=async(req,res)=>{
    try{
        const data=await Channelmember.findAll(
            {where:
                {channelId:req.body.id},
               attributes:['id'],
                 include : [
                {
                    model : db.users,
                    attributes:['name']
                    
    }]
    })
    res.status(200).send(data);
}
    catch(err){res.send(err.message);}
}


module.exports={
    addchannel,getchannel,sendmsg,joinchannel,getusersofchannel,
}
