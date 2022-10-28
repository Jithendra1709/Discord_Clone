module.exports=(sequelize,DataTypes)=>{
    const Servermember=sequelize.define('servermember',{
        // server_id:{
        //     type:DataTypes.INTEGER
        // },
        // member_id:{
        //     type:DataTypes.INTEGER
        // },
    });
    return Servermember;
};