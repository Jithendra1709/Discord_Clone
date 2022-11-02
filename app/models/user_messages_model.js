module.exports=(sequelize,DataTypes)=>{
    const Usermessage=sequelize.define('user_message',{
        server_id:{
            type:DataTypes.INTEGER
        },
        channel_id:{
            type:DataTypes.INTEGER
        },
    });
    return Usermessage;
};