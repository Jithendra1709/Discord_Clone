module.exports=(sequelize,DataTypes)=>{
    const Channel=sequelize.define('channel',{
        name:{
            type:DataTypes.STRING
        },
        channel_id:{
            type:DataTypes.INTEGER,
            unique:true
        },
        message_id:{
            type:DataTypes.INTEGER
        },
        thread_id:{
            type:DataTypes.INTEGER
        },
        share:{
            type:DataTypes.STRING
        },
        notification:{
            type:DataTypes.INTEGER
        },
        user_id:{
            type:DataTypes.INTEGER
        }
    });
    return Channel;
}