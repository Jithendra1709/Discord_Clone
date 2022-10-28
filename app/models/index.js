const dbConfig =require('../config/db.config');
const {Sequelize,DataTypes}=require('sequelize');

const sequelize=new Sequelize(dbConfig.DB,dbConfig.USER,dbConfig.PASSWORD,
    {
        host:dbConfig.HOST,
        dialect:dbConfig.dialect,
        operatorAliases:false,
        logging:false,
        pool:{
            max:dbConfig.pool.max,
            min:dbConfig.pool.min,
            acquire:dbConfig.pool.acquire,
            idle:dbConfig.pool.idle,

        }
    });

    sequelize.authenticate().then(()=>{
        console.log(`Database :: ${dbConfig.DB} : connected`);
    })
    .catch(err=>{
        console.log('error'+err);
    })

    const db={};

    db.Sequelize=Sequelize;
    db.sequelize=sequelize;

    db.users=require('./user_model')(sequelize,DataTypes);
    db.loginOtps=require('./loginAuth_model')(sequelize,DataTypes);
    db.servers=require('./server_model')(sequelize,DataTypes);
    db.channels=require('./channel_model')(sequelize,DataTypes);
    db.servermember=require('./Servermember_model')(sequelize,DataTypes);
    db.channelmember=require('./channelmember_model')(sequelize,DataTypes);
    db.messages=require('./message_model')(sequelize,DataTypes);
    db.share=require('./share_model')(sequelize,DataTypes);
    db.notification=require('./notification_model')(sequelize,DataTypes);

    db.sequelize.sync({force:false}).then(()=>{
        console.log('Sync done');
    })
    .catch((err)=>console.log('Error is',err));


//Many to Many relation for channels and users using channlemember(juntion table).
    db.channels.hasMany(db.channelmember);
    db.channelmember.belongsTo(db.channels);
    db.users.hasMany(db.channelmember);
    db.channelmember.belongsTo(db.users);

//Many to Many relation for server and users using servermember(juntion table). 
    db.servers.hasMany(db.servermember);
    db.servermember.belongsTo(db.servers);
    db.users.hasMany(db.servermember);
    db.servermember.belongsTo(db.users);




    module.exports=db;