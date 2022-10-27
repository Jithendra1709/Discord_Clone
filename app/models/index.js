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
    db.servermembers=require('./Servermember_model')(sequelize,DataTypes);
    db.channelmembers=require('./channelmember_model')(sequelize,DataTypes);
    db.messages=require('./message_model')(sequelize,DataTypes);
    db.share=require('./share_model')(sequelize,DataTypes);
    db.notification=require('./notification_model')(sequelize,DataTypes);

    db.sequelize.sync({force:false}).then(()=>{
        console.log('Sync done');
    })
    .catch((err)=>console.log('Error is',err));

    //  db.channel.hasOne(db.share);
    // db.share.belongsTo(db.channel);

    // // //many to many relation for channels and users via channelmembers
    // db.users.belongsToMany(db.channels,{through: db.channelmembers});
    // db.channels.belongsToMany(db.users,{through:db.channelmembers});

    // //  //many to many relation for servers and users via servermembers
    //  db.users.belongsToMany(db.servers,{through:db.servermembers});
    //  db.servers.belongsToMany(db.users,{through:db.servermembers});

    db.channels.belongsToMany(db.users, {through:db.channelmembers});
    db.users.belongsToMany(db.channels,{through:db.channelmembers});

    db.servers.belongsToMany(db.users, {through: db.servermembers});
    db.users.belongsToMany(db.servers,{through:db.servermembers});





    module.exports=db;