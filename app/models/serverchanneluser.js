module.exports=(sequelize,DataTypes)=>{
    const Serverchanneluser=sequelize.define('serverChannelUser',{
        userId:{
            type:DataTypes.INTEGER,
        },
        private:{
            type:DataTypes.BOOLEAN,
        }
    });
    return Serverchanneluser;
};