// const { channelmembers } = require(".");

module.exports=(sequelize,DataTypes)=>{
    const Channelmember=sequelize.define('channelmember',{
        channel_id:{
            type:DataTypes.INTEGER,
            // allowNull:false,
            // references:{
            //     model:'channels',
            //     key:'id',
            // }
        },
        member_id:{
            type:DataTypes.INTEGER,
            // allowNull:false,
            // references:{
            //     model:'users',
            //     key:'id',
            // }
        },
    });

    // Channelmember.associate=models=>{
    //     Channelmember.belongsTo(models.user,{
    //         foreignKey:'id'
    //     });
    //     Channelmember.belongsTo(models.channel,{
    //         foreignKey:'id'
    //     });
    // }

    return Channelmember;
};