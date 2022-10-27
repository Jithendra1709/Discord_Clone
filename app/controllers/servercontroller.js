const db=require('../models');
const Server=db.servers;

const addserver=async(req,res)=>{
    let info={
        name:req.body.name,
        channel_id:req.body.channel_id,
        notification:req.body.notification,
    }
    try{
    const server=await Server.create(info);
    res.status(200).send(server);
    //console.log(user);
    }
    catch(err){ res.send(err.message)}
    
}
const getserver=async(req,res)=>{
    let id=req.params.id;
    try{
    const server=await Server.findOne({where :{id:id}});
    res.status(200).send(server);
    }
    catch(err){res.send(err.message)}
}

module.exports={
    addserver,getserver
}