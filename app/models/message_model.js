module.exports=(sequelize,DataTypes)=>{
    const Message=sequelize.define('message',{
        msg:{
            type:DataTypes.STRING
        },
        sender:{
            type:DataTypes.STRING
        },
        time:{
            type:DataTypes.TIME
        },
        pinned:{
            type:DataTypes.BOOLEAN
        },
        thread_id:{
            type:DataTypes.INTEGER
        },
    });
    return Message;
}