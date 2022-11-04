const db=require('../models');
const User=db.users;
const Server=db.servers;
const Servermember=db.servermember;
const Channel=db.channels;
const Serverchanneluser=db.serverchanneluser;

const createserver=async(req,res)=>{
    let info={
        name:req.body.name,
        created_by:req.userId,
    }
    try{
    const server=await Server.create(info);
    const addserver=await Servermember.create({
        userId:req.userId,
        serverId:server.id,
    })
    // console.log('server is added');
    res.status(200).send(server);
    }

    catch(err){ res.send(err.message)}
    
}



const getallservers=async(req,res)=>{
    try{
        const server=await Servermember.findAll( {where:
            {userId:req.userId},
           attributes:[],
             include : [
            {
                model : db.servers,
               attributes:['name'],
               include:[
                {
                    model:db.channels,
                    attributes:['name'],
                }
               ]
                
}]
})
res.status(200).send(server);
    }
    catch(err){res.send(err.message);}
}



const getnonprivatechannels=async(req,res)=>{
    let id=req.params.id
    try{
        const details=await Serverchanneluser.findAll( {where:
            {serverId:id,userId:req.userId,private:false},
        //    attributes:[],
             include : [
            {
                model : db.channels,
               attributes:['name'],
            //    include:[
            //     {
            //         model:db.channels,
            //         attributes:['name'],
            //     }
            //    ]
                
}]
})
res.status(200).send(details);
    }
    catch(err){res.send(err.message);}
}

const joinserver=async(req,res)=>{
  try{
    const join=await Servermember.create({userId:req.userId,serverId:req.params.id});
    res.status(200).send(join);

  }
  catch(err){res.send(err.message)}
}






module.exports={
    createserver,getallservers,getnonprivatechannels,joinserver,
}