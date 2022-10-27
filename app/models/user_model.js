module.exports=(sequelize,DataTypes)=>{
    const User=sequelize.define('user',{
        name:{
            type:DataTypes.STRING,
            
        },
        email_id:{
            type:DataTypes.STRING,
            unique:true,
        },
        mobile_number:{
            type:DataTypes.INTEGER,
            unique:true,
        },
        dob:{
            type:DataTypes.DATEONLY
        },
        password:{
            type:DataTypes.STRING,
        }
    });

 
    return User;
}