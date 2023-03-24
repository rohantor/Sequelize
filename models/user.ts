
import { DataTypes, Model } from "sequelize"; 
import { db } from "../config";

export const User = db.define('User', {
    // Model attributes are defined here
    id: {
        type: DataTypes.INTEGER,
        primaryKey:true,
        allowNull:false,
        unique:true,
        autoIncrement:true,
    },
    username:{
        type: DataTypes.STRING,
        allowNull:false,
        unique:true,

    },
    password:{
        type: DataTypes.STRING,
        allowNull:false,
    },
    roleid:{
        type: DataTypes.INTEGER,
        allowNull:false,

    },
    createdBy:{
        type: DataTypes.INTEGER,
        allowNull:false,
    },
    updatedBy: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    deletedBy:{
        type: DataTypes.INTEGER,
        defaultValue:null,
    },
    deletedAt:{
        type: DataTypes.DATE,
        defaultValue:null,
    }
}, {
    tableName:'user'
});


