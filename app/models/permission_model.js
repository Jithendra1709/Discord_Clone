module.exports=(sequelize,DataTypes)=>{
    const Permission=sequelize.define('permission',{
        role_name:{
            type:DataTypes.STRING,
        },
        view_channels:{
            type:DataTypes.BOOLEAN,
            
        },
        manage_channels:{
            type:DataTypes.BOOLEAN
        },
        manage_roles:{
            type:DataTypes.BOOLEAN
        },
        manage_emoji_stickers:{
            type:DataTypes.BOOLEAN,
            
        },
        view_auditlogs:{
            type:DataTypes.BOOLEAN
        },
        manage_webhooks:{
            type:DataTypes.BOOLEAN
        },
        manage_server:{
            type:DataTypes.BOOLEAN,
            
        },
        create_invite:{
            type:DataTypes.BOOLEAN
        },
        change_nickname:{
            type:DataTypes.BOOLEAN
        },
        manage_nickname:{
            type:DataTypes.BOOLEAN,
            
        },
        kick_members:{
            type:DataTypes.BOOLEAN
        },
        ban_members:{
            type:DataTypes.BOOLEAN
        },
        moderate_member:{
            type:DataTypes.BOOLEAN,
            
        },
        send_messages:{
            type:DataTypes.BOOLEAN
        },
        send_messages_in_thread:{
            type:DataTypes.BOOLEAN
        },
        create_public_thread:{
            type:DataTypes.BOOLEAN,
            
        },
        embed_links:{
            type:DataTypes.BOOLEAN
        },
        attach_files:{
            type:DataTypes.BOOLEAN
        },
        add_reactions:{
            type:DataTypes.BOOLEAN,
            
        },
        manage_messages:{
            type:DataTypes.BOOLEAN
        },
        manage_threads:{
            type:DataTypes.BOOLEAN
        },
        mention:{
            type:DataTypes.BOOLEAN
        },
       
    });
    return Permission;
}