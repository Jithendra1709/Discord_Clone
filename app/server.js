const express=require('express');
const cors= require('cors');
const app=express();
const authtoken=require('./controllers/authnitication');

var corsOptions={
    // origin:'http://192.168.1.140:3000/login'
    origin:'*'
}

app.use(cors(corsOptions));

app.use(express.json());

app.use(express.urlencoded({extended:true}));

const userrouter=require('./Routes/userroutes');
app.use('/user',userrouter);

const otprouter=require('./Routes/otproutes');
app.use('/',otprouter);

const messagerouter=require('./Routes/messageroute');
app.use('/message',messagerouter);

const channelrouter=require('./Routes/channelroutes');
app.use('/channel',channelrouter);

const serverrouter=require('./Routes/serverroutes');
app.use('/server',serverrouter);

const notificationrouter=require('./Routes/notificationroutes');
app.use('/notification',notificationrouter);

app.get('/welcome',(req,res)=>{
    res.json({message: 'welcome to discord application'});
});


const PORT=process.env.PORT||7070;

app.listen(PORT,()=>{
    console.log(`server running on ${PORT}`);
});




